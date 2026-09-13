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
	 * to lightest (Skills) for light mode, and the dark-mode row shows the same 5 hexes
	 * with the order reversed relative to the (unchanged) labels — Experience becomes the
	 * lightest, Skills the darkest. Hero always mirrors whatever hex Experience shows in
	 * that mode. False for multi-hue palettes, where sections/hero stay identical in both modes.
	 */
	scale: boolean;
	/**
	 * Explicit dark-mode section hexes, for palettes where the live CSS no longer follows
	 * a pure mirrored reversal of `sections` (some slots were independently WCAG-retuned
	 * per mode instead). When omitted, dark mode is computed via `reverseSectionHexes`.
	 */
	sectionsDark?: Swatch[];
	surface: { light: string; dark: string };
	activeExperience: { light: string; dark: string };
}
