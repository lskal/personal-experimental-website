import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageContext, type Locale } from './LanguageContext';
import { content as enContent } from '../content/en';
import { content as itContent } from '../content/it';
import type { SiteContent } from '../content/types';
import {
	fetchLocaleContent,
	getCachedContent,
	scheduleIdleFetch,
} from '../content/fetchContent';

const STORAGE_KEY = 'locale';

const FALLBACK_CONTENT: Record<Locale, SiteContent> = {
	en: enContent,
	it: itContent,
};

function getInitialLocale(): Locale {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'en' || stored === 'it') {
		return stored;
	}

	return navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
}

function otherLocale(locale: Locale): Locale {
	return locale === 'en' ? 'it' : 'en';
}

function getInitialContent(): Record<Locale, SiteContent> {
	return {
		en: getCachedContent('en') ?? FALLBACK_CONTENT.en,
		it: getCachedContent('it') ?? FALLBACK_CONTENT.it,
	};
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);
	const [contentByLocale, setContentByLocale] = useState(getInitialContent);
	const fetchedLocales = useRef(new Set<Locale>());

	useEffect(() => {
		document.documentElement.setAttribute('lang', locale);
		localStorage.setItem(STORAGE_KEY, locale);
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
			});
		});

		return () => {
			cancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps -- runs once after the priority locale is known, not on every locale toggle
	}, []);

	const toggleLocale = () => {
		setLocale(current => otherLocale(current));
	};

	return (
		<LanguageContext.Provider
			value={{ locale, toggleLocale, content: contentByLocale[locale] }}
		>
			{children}
		</LanguageContext.Provider>
	);
}
