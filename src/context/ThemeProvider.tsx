import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from '../types/context';

// Bumped from 'theme': the old key was written on every load (not just on
// toggle), so it froze the device setting from the first visit.
const STORAGE_KEY = 'theme-choice';
const DARK_QUERY = '(prefers-color-scheme: dark)';

const getStoredTheme = (): Theme | null => {
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === 'light' || stored === 'dark' ? stored : null;
};

const getInitialTheme = (): Theme => {
	return (
		getStoredTheme() ?? (window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light')
	);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	// Follow the device setting live until the visitor makes an explicit choice.
	useEffect(() => {
		const media = window.matchMedia(DARK_QUERY);
		const handleChange = (event: MediaQueryListEvent) => {
			if (!getStoredTheme()) {
				setTheme(event.matches ? 'dark' : 'light');
			}
		};
		media.addEventListener('change', handleChange);
		return () => media.removeEventListener('change', handleChange);
	}, []);

	// Only an explicit toggle is persisted, so the device default keeps
	// applying until the visitor actually picks a theme.
	const toggleTheme = () => {
		const next = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem(STORAGE_KEY, next);
		setTheme(next);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
