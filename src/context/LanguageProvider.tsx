import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import { content as enContent } from '../content/en';
import { content as itContent } from '../content/it';
import type { SiteContent } from '../types/content';
import type { Locale } from '../types/context';
import {
	fetchLocaleContent,
	getCachedContent,
	scheduleIdleFetch,
} from '../content/fetchContent';
import { getVisitorCountry } from '../utils/visitorCountry';

// Bumped from 'locale': the old key was written on every load (not just on
// toggle), so it holds auto-picked values that would block IP-based detection.
const STORAGE_KEY = 'locale-choice';

const PLACEHOLDER_CONTENT: Record<Locale, SiteContent> = {
	en: enContent,
	it: itContent,
};

const getInitialLocale = (): Locale => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'en' || stored === 'it') {
		return stored;
	}

	// IP country only, deliberately not navigator.language — device language
	// doesn't say where the visitor is.
	return getVisitorCountry() === 'IT' ? 'it' : 'en';
};

const otherLocale = (locale: Locale): Locale => {
	return locale === 'en' ? 'it' : 'en';
};

const getInitialContent = (): Record<Locale, SiteContent> => {
	return {
		en: getCachedContent('en') ?? PLACEHOLDER_CONTENT.en,
		it: getCachedContent('it') ?? PLACEHOLDER_CONTENT.it,
	};
};

const getInitialLoadedLocales = (): Set<Locale> => {
	const loaded = new Set<Locale>();
	if (getCachedContent('en')) {
		loaded.add('en');
	}
	if (getCachedContent('it')) {
		loaded.add('it');
	}
	return loaded;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);
	const [contentByLocale, setContentByLocale] = useState(getInitialContent);
	const [loadedLocales, setLoadedLocales] = useState(getInitialLoadedLocales);
	const fetchedLocales = useRef(new Set<Locale>());

	useEffect(() => {
		document.documentElement.setAttribute('lang', locale);
	}, [locale]);

	useEffect(() => {
		if (fetchedLocales.current.has(locale)) {
			return;
		}
		fetchedLocales.current.add(locale);

		let cancelled = false;

		fetchLocaleContent(locale).then(fetched => {
			if (cancelled || !fetched) {
				return;
			}
			setContentByLocale(current => ({ ...current, [locale]: fetched }));
			setLoadedLocales(current => new Set(current).add(locale));
		});

		return () => {
			cancelled = true;
		};
	}, [locale]);

	useEffect(() => {
		const deferredLocale = otherLocale(locale);
		if (fetchedLocales.current.has(deferredLocale)) {
			return;
		}

		let cancelled = false;

		scheduleIdleFetch(() => {
			if (cancelled || fetchedLocales.current.has(deferredLocale)) {
				return;
			}
			fetchedLocales.current.add(deferredLocale);

			fetchLocaleContent(deferredLocale).then(fetched => {
				if (cancelled || !fetched) {
					return;
				}
				setContentByLocale(current => ({ ...current, [deferredLocale]: fetched }));
				setLoadedLocales(current => new Set(current).add(deferredLocale));
			});
		});

		return () => {
			cancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps -- runs once after the priority locale is known, not on every locale toggle
	}, []);

	// Only an explicit toggle is persisted, so the IP-based default keeps
	// applying until the visitor actually picks a language.
	const toggleLocale = () => {
		const next = otherLocale(locale);
		localStorage.setItem(STORAGE_KEY, next);
		setLocale(next);
	};

	return (
		<LanguageContext.Provider
			value={{
				locale,
				toggleLocale,
				content: contentByLocale[locale],
				isLoading: !loadedLocales.has(locale),
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
