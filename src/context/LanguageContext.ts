import { createContext } from 'react';
import type { LanguageContextValue } from '../types/context';

export const LanguageContext = createContext<LanguageContextValue | undefined>(
	undefined,
);
