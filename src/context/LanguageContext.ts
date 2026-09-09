import { createContext } from 'react';
import type { SiteContent } from '../content/types';

export type Locale = 'en' | 'it';

export interface LanguageContextValue {
	locale: Locale;
	toggleLocale: () => void;
	content: SiteContent;
	isLoading: boolean;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
	undefined,
);
