import { useEffect, useState, type ReactNode } from 'react';
import { PaletteContext } from './PaletteContext';
import type { PaletteId } from '../types/context';
import { PALETTES, DEFAULT_PALETTE_ID } from './paletteList';

const STORAGE_KEY = 'palette';

const isPaletteId = (value: number): value is PaletteId => {
	return PALETTES.some(palette => palette.id === value);
};

const getInitialPalette = (): PaletteId => {
	const stored = Number(localStorage.getItem(STORAGE_KEY));
	return isPaletteId(stored) ? stored : DEFAULT_PALETTE_ID;
};

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
	const [paletteId, setPaletteId] = useState<PaletteId>(getInitialPalette);

	useEffect(() => {
		document.documentElement.setAttribute('data-palette', String(paletteId));
		localStorage.setItem(STORAGE_KEY, String(paletteId));
	}, [paletteId]);

	const nextPalette = () => {
		setPaletteId(current => {
			const index = PALETTES.findIndex(palette => palette.id === current);
			return PALETTES[(index + 1) % PALETTES.length].id;
		});
	};

	const resetPalette = () => setPaletteId(DEFAULT_PALETTE_ID);

	const paletteName = PALETTES.find(palette => palette.id === paletteId)!.name;

	return (
		<PaletteContext.Provider
			value={{
				paletteId,
				paletteName,
				isDefaultPalette: paletteId === DEFAULT_PALETTE_ID,
				nextPalette,
				resetPalette,
			}}
		>
			{children}
		</PaletteContext.Provider>
	);
};
