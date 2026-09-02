import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, type Locale } from './LanguageContext';
import { content as enContent } from '../content/en';
import { content as itContent } from '../content/it';

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'en' || stored === 'it') {
		return stored;
	}

	return navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);

	useEffect(() => {
		document.documentElement.setAttribute('lang', locale);
		localStorage.setItem(STORAGE_KEY, locale);
	}, [locale]);

	const toggleLocale = () => {
		setLocale(current => (current === 'en' ? 'it' : 'en'));
	};

	const content = locale === 'it' ? itContent : enContent;

	return (
		<LanguageContext.Provider value={{ locale, toggleLocale, content }}>
			{children}
		</LanguageContext.Provider>
	);
}
