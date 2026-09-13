import { createContext } from 'react';
import type { ThemeContextValue } from '../types/context';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
	undefined,
);
