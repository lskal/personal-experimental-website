import { createContext } from 'react';

export type PaletteId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface PaletteContextValue {
	paletteId: PaletteId;
	paletteName: string;
	isDefaultPalette: boolean;
	nextPalette: () => void;
	resetPalette: () => void;
}

export const PaletteContext = createContext<PaletteContextValue | undefined>(
	undefined,
);
