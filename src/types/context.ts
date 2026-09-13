import type { SiteContent } from './content';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

export type Locale = 'en' | 'it';

export interface LanguageContextValue {
	locale: Locale;
	toggleLocale: () => void;
	content: SiteContent;
	isLoading: boolean;
}

export type PaletteId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface PaletteContextValue {
	paletteId: PaletteId;
	paletteName: string;
	isDefaultPalette: boolean;
	nextPalette: () => void;
	resetPalette: () => void;
}
