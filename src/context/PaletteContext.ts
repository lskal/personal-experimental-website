import { createContext } from 'react';
import type { PaletteContextValue } from '../types/context';

export const PaletteContext = createContext<PaletteContextValue | undefined>(
	undefined,
);
