import type { ReactNode } from 'react';
import type { ExperienceEntry, PersonalProject } from './content';

export type TagAccent = 'skills' | 'projects' | 'languages' | 'experience';

export interface TagProps {
	accent: TagAccent;
	children: ReactNode;
}

export interface CardProps {
	as?: 'div' | 'article' | 'details';
	accent?: TagAccent;
	active?: boolean;
	className?: string;
	children: ReactNode;
}

export interface BrandIconProps {
	size?: number;
}

export interface SkeletonBlockProps {
	/** Omit to let the className's own CSS control sizing (e.g. reusing an existing fixed-size class). */
	width?: string;
	/** Omit to let the className's own CSS control sizing (e.g. reusing an existing fixed-size class). */
	height?: string;
	variant?: 'text' | 'block' | 'pill' | 'circle';
	className?: string;
}

export interface ProjectCardProps {
	project: PersonalProject;
}

export interface CompanyTimelineItemProps {
	entry: ExperienceEntry;
	defaultOpen?: boolean;
}

export interface Swatch {
	hex: string;
	label: string;
}

export interface PaletteBlock {
	title: string;
	core: Swatch[];
	lightBg: string;
	darkBg: string;
	hero: Swatch;
	sections: Swatch[];
	/**
	 * True for monochromatic "scale" palettes: sections are ordered darkest (Experience)
	 * to lightest (Skills) for light mode, and — absent `sectionsDark` — the dark-mode row
	 * shows the same 5 hexes with the order reversed relative to the (unchanged) labels,
	 * and Hero mirrors whatever hex Experience shows in that mode. False for multi-hue
	 * palettes, where `hero`/`sections` are used as-is for light mode; dark mode still
	 * needs its own `heroDark`/`sectionsDark` if the live CSS differs by mode (several do).
	 */
	scale: boolean;
	/**
	 * Explicit dark-mode section hexes, for palettes where the live CSS no longer follows
	 * a pure mirrored reversal of `sections` (some slots were independently WCAG-retuned
	 * per mode instead). When omitted for a `scale: true` palette, dark mode is computed via
	 * `reverseSectionHexes`; when omitted for `scale: false`, dark mode reuses `sections` as-is.
	 */
	sectionsDark?: Swatch[];
	/**
	 * Explicit dark-mode Hero hex for `scale: false` palettes whose live CSS gives Hero a
	 * different color per mode. Ignored for `scale: true` palettes (Hero is always derived
	 * from Experience there). When omitted, dark mode reuses `hero` as-is.
	 */
	heroDark?: Swatch;
	surface: { light: string; dark: string };
	activeExperience: { light: string; dark: string };
}
