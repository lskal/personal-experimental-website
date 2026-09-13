import './PaletteDemo.css';
import type { Swatch, PaletteBlock } from '../../types/components';

// Temporary reference block for the color-palette decision (CLAUDE.md backlog item 1).
// Flip this to true to show it again; set back to false once a palette is chosen.
const SHOW_PALETTE_DEMO = true;

function reverseSectionHexes(sections: Swatch[]): Swatch[] {
	return sections.map((swatch, index) => ({
		label: swatch.label,
		hex: sections[sections.length - 1 - index].hex,
	}));
}

const palettes: PaletteBlock[] = [
	{
		title: 'Cool blues',
		core: [
			{ hex: '#F0EBD8', label: 'F0EBD8 (light bg)' },
			{ hex: '#748CAB', label: '748CAB' },
			{ hex: '#3E5C76', label: '3E5C76' },
			{ hex: '#1D2D44', label: '1D2D44' },
			{ hex: '#0D1321', label: '0D1321 (dark bg)' },
		],
		lightBg: '#F0EBD8',
		darkBg: '#0D1321',
		hero: { hex: '#233E5C', label: 'Hero' },
		sections: [
			{ hex: '#233E5C', label: 'Experience' },
			{ hex: '#386394', label: 'Languages' },
			{ hex: '#5989C0', label: 'Projects' },
			{ hex: '#3A597E', label: 'Education' },
			{ hex: '#3F6189', label: 'Skills' },
		],
		scale: true,
		sectionsDark: [
			{ hex: '#C8D8EA', label: 'Experience' },
			{ hex: '#90B0D5', label: 'Languages' },
			{ hex: '#5989C0', label: 'Projects' },
			{ hex: '#8A9DB4', label: 'Education' },
			{ hex: '#778DA8', label: 'Skills' },
		],
		surface: { light: '#D8D6D2', dark: '#242529' },
		activeExperience: { light: '#EFF1F5', dark: '#6A7686' },
	},
	{
		title: 'Botanical greens',
		core: [
			{ hex: '#D7F9F1', label: 'D7F9F1 (light bg)' },
			{ hex: '#AFBC88', label: 'AFBC88' },
			{ hex: '#7AA095', label: '7AA095' },
			{ hex: '#618B4A', label: '618B4A' },
			{ hex: '#40531B', label: '40531B (dark bg)' },
		],
		lightBg: '#D7F9F1',
		darkBg: '#40531B',
		hero: { hex: '#233E5C', label: 'Hero' },
		sections: [
			{ hex: '#233E5C', label: 'Experience' },
			{ hex: '#386394', label: 'Languages' },
			{ hex: '#5989C0', label: 'Projects' },
			{ hex: '#43602C', label: 'Education' },
			{ hex: '#4A6B31', label: 'Skills' },
		],
		scale: true,
		sectionsDark: [
			{ hex: '#C8D8EA', label: 'Experience' },
			{ hex: '#90B0D5', label: 'Languages' },
			{ hex: '#5989C0', label: 'Projects' },
			{ hex: '#ADC19E', label: 'Education' },
			{ hex: '#A8BD98', label: 'Skills' },
		],
		surface: { light: '#D4DDDB', dark: '#484C41' },
		activeExperience: { light: '#EFF1F5', dark: '#889883' },
	},
	{
		title: 'Warm sunset',
		core: [
			{ hex: '#BBDEF0', label: 'BBDEF0 (light bg)' },
			{ hex: '#EFCA08', label: 'EFCA08' },
			{ hex: '#F49F0A', label: 'F49F0A' },
			{ hex: '#F08700', label: 'F08700' },
			{ hex: '#00A6A6', label: '00A6A6 (dark bg)' },
		],
		lightBg: '#BBDEF0',
		darkBg: '#00A6A6',
		hero: { hex: '#C1272D', label: 'Hero' },
		sections: [
			{ hex: '#C1272D', label: 'Experience' },
			{ hex: '#FF5A36', label: 'Languages' },
			{ hex: '#FF8800', label: 'Projects' },
			{ hex: '#FFC300', label: 'Education' },
			{ hex: '#FFE066', label: 'Skills' },
		],
		scale: true,
		surface: { light: '#C1C8CC', dark: '#547171' },
		activeExperience: { light: '#F2ECD6', dark: '#81C695' },
	},
	{
		title: 'Rainbow sunset',
		core: [
			{ hex: '#BBDEF0', label: 'BBDEF0 (light bg)' },
			{ hex: '#EFCA08', label: 'EFCA08' },
			{ hex: '#F49F0A', label: 'F49F0A' },
			{ hex: '#F08700', label: 'F08700' },
			{ hex: '#00A6A6', label: '00A6A6 (dark bg)' },
		],
		lightBg: '#BBDEF0',
		darkBg: '#00A6A6',
		hero: { hex: '#FF5A36', label: 'Hero' },
		sections: [
			{ hex: '#235789', label: 'Experience' },
			{ hex: '#E83E8C', label: 'Languages' },
			{ hex: '#2FB380', label: 'Projects' },
			{ hex: '#FF5A36', label: 'Education' },
			{ hex: '#F1D302', label: 'Skills' },
		],
		scale: false,
		surface: { light: '#C1C8CC', dark: '#547171' },
		activeExperience: { light: '#BBC4CD', dark: '#1292AB' },
	},
	{
		title: 'Sage & terracotta',
		core: [
			{ hex: '#7FB685', label: '7FB685 (light bg)' },
			{ hex: '#F2C57C', label: 'F2C57C' },
			{ hex: '#DDAE7E', label: 'DDAE7E' },
			{ hex: '#EF6F6C', label: 'EF6F6C' },
			{ hex: '#F4A9A8', label: 'F4A9A8' },
			{ hex: '#E2C391', label: 'E2C391' },
			{ hex: '#426A5A', label: '426A5A (dark bg)' },
		],
		lightBg: '#7FB685',
		darkBg: '#426A5A',
		hero: { hex: '#EF6F6C', label: 'Hero' },
		sections: [
			{ hex: '#EF6F6C', label: 'Experience' },
			{ hex: '#F4A9A8', label: 'Languages' },
			{ hex: '#DDAE7E', label: 'Projects' },
			{ hex: '#E2C391', label: 'Education' },
			{ hex: '#F2C57C', label: 'Skills' },
		],
		scale: true,
		surface: { light: '#869087', dark: '#626966' },
		activeExperience: { light: '#F0E8DB', dark: '#9A9C74' },
	},
	{
		title: 'Violet garden',
		core: [
			{ hex: '#8963BA', label: '8963BA (light bg)' },
			{ hex: '#AFE3C0', label: 'AFE3C0' },
			{ hex: '#90C290', label: '90C290' },
			{ hex: '#688B58', label: '688B58' },
			{ hex: '#54428E', label: '54428E (dark bg)' },
		],
		lightBg: '#8963BA',
		darkBg: '#54428E',
		hero: { hex: '#4A6741', label: 'Hero' },
		sections: [
			{ hex: '#4A6741', label: 'Experience' },
			{ hex: '#688B58', label: 'Languages' },
			{ hex: '#90C290', label: 'Projects' },
			{ hex: '#0D120F', label: 'Education' },
			{ hex: '#121513', label: 'Skills' },
		],
		scale: true,
		sectionsDark: [
			{ hex: '#F8F9F8', label: 'Experience' },
			{ hex: '#F6F8F6', label: 'Languages' },
			{ hex: '#90C290', label: 'Projects' },
			{ hex: '#688B58', label: 'Education' },
			{ hex: '#4A6741', label: 'Skills' },
		],
		surface: { light: '#7E7887', dark: '#74717E' },
		activeExperience: { light: '#F2F7F4', dark: '#9A9CBA' },
	},
	{
		title: 'Indigo storm',
		core: [
			{ hex: '#347FC4', label: '347FC4 (light bg)' },
			{ hex: '#989FCE', label: '989FCE' },
			{ hex: '#7D6B91', label: '7D6B91' },
			{ hex: '#5D536B', label: '5D536B' },
			{ hex: '#272838', label: '272838 (dark bg)' },
		],
		lightBg: '#347FC4',
		darkBg: '#272838',
		hero: { hex: '#1E1A24', label: 'Hero' },
		sections: [
			{ hex: '#1E1A24', label: 'Experience' },
			{ hex: '#312B38', label: 'Languages' },
			{ hex: '#3F3649', label: 'Projects' },
			{ hex: '#3E4053', label: 'Education' },
			{ hex: '#41434F', label: 'Skills' },
		],
		scale: true,
		sectionsDark: [
			{ hex: '#B8BEDE', label: 'Experience' },
			{ hex: '#989FCE', label: 'Languages' },
			{ hex: '#7D6B91', label: 'Projects' },
			{ hex: '#B8B4BE', label: 'Education' },
			{ hex: '#C6C4CA', label: 'Skills' },
		],
		surface: { light: '#A9AEB3', dark: '#3D3D40' },
		activeExperience: { light: '#E9EAF0', dark: '#71748E' },
	},
	{
		title: 'Forest twilight',
		core: [
			{ hex: '#80B192', label: '80B192 (light bg)' },
			{ hex: '#6A8D92', label: '6A8D92' },
			{ hex: '#5B6E80', label: '5B6E80' },
			{ hex: '#4B4E6D', label: '4B4E6D' },
			{ hex: '#A1E887', label: 'A1E887' },
			{ hex: '#493548', label: '493548 (dark bg)' },
		],
		lightBg: '#80B192',
		darkBg: '#493548',
		hero: { hex: '#4B4E6D', label: 'Hero' },
		sections: [
			{ hex: '#4B4E6D', label: 'Experience' },
			{ hex: '#5B6E80', label: 'Languages' },
			{ hex: '#161D1F', label: 'Projects' },
			{ hex: '#1F2628', label: 'Education' },
			{ hex: '#A1E887', label: 'Skills' },
		],
		scale: true,
		sectionsDark: [
			{ hex: '#A1E887', label: 'Experience' },
			{ hex: '#8FB3B8', label: 'Languages' },
			{ hex: '#6A8D92', label: 'Projects' },
			{ hex: '#5B6E80', label: 'Education' },
			{ hex: '#4B4E6D', label: 'Skills' },
		],
		surface: { light: '#858D88', dark: '#504C50' },
		activeExperience: { light: '#DCE2E3', dark: '#727885' },
	},
	{
		title: 'Originals',
		core: [
			{ hex: '#FFFFFF', label: 'FFFFFF (light bg)' },
			{ hex: '#F7F7F8', label: 'F7F7F8' },
			{ hex: '#E4E4E7', label: 'E4E4E7' },
			{ hex: '#1A1A1C', label: '1A1A1C' },
			{ hex: '#0F0F10', label: '0F0F10 (dark bg)' },
		],
		lightBg: '#FFFFFF',
		darkBg: '#0F0F10',
		hero: { hex: '#00C48C', label: 'Hero' },
		sections: [
			{ hex: '#2E5CFF', label: 'Experience' },
			{ hex: '#FF3D7F', label: 'Languages' },
			{ hex: '#FF5A36', label: 'Projects' },
			{ hex: '#FFB800', label: 'Education' },
			{ hex: '#6C4EFF', label: 'Skills' },
		],
		scale: false,
		surface: { light: '#F7F7F8', dark: '#1A1A1C' },
		activeExperience: { light: '#F5F7FF', dark: '#11131C' },
	},
];

export function PaletteDemo() {
	if (!SHOW_PALETTE_DEMO) {
		return null;
	}

	return (
		<section className="palette-demo" aria-label="Color palette options">
			{palettes.map(palette => {
				const darkSections =
					palette.sectionsDark ??
					(palette.scale ? reverseSectionHexes(palette.sections) : palette.sections);
				const lightHero = palette.scale
					? { hex: palette.sections[0].hex, label: 'Hero' }
					: palette.hero;
				const darkHero = palette.scale
					? { hex: darkSections[0].hex, label: 'Hero' }
					: palette.hero;

				return (
					<div className="palette-demo__block" key={palette.title}>
						<div className="palette-demo__header">
							<h2>{palette.title}</h2>
							<div className="palette-demo__row">
								{palette.core.map(swatch => (
									<div className="palette-demo__swatch" key={swatch.label}>
										<span
											className="palette-demo__chip"
											style={{ backgroundColor: swatch.hex }}
										/>
										<code>{swatch.label}</code>
									</div>
								))}
							</div>
						</div>

						<div
							className="palette-demo__mode palette-demo__mode--light"
							style={{ backgroundColor: palette.lightBg }}
						>
							<p className="palette-demo__mode-label">
								Light mode ({palette.lightBg.replace('#', '')})
							</p>
							<div className="palette-demo__row">
								{[
									lightHero,
									...palette.sections,
									{ hex: palette.surface.light, label: 'Surface' },
									{ hex: palette.activeExperience.light, label: 'Experience (active)' },
								].map(swatch => (
									<div className="palette-demo__swatch" key={swatch.label}>
										<span
											className="palette-demo__chip"
											style={{ backgroundColor: swatch.hex }}
										/>
										<code>
											{swatch.label}
											<br />
											{swatch.hex.replace('#', '')}
										</code>
									</div>
								))}
							</div>
						</div>

						<div
							className="palette-demo__mode palette-demo__mode--dark"
							style={{ backgroundColor: palette.darkBg }}
						>
							<p className="palette-demo__mode-label">
								Dark mode ({palette.darkBg.replace('#', '')})
							</p>
							<div className="palette-demo__row">
								{[
									darkHero,
									...darkSections,
									{ hex: palette.surface.dark, label: 'Surface' },
									{ hex: palette.activeExperience.dark, label: 'Experience (active)' },
								].map(swatch => (
									<div className="palette-demo__swatch" key={swatch.label}>
										<span
											className="palette-demo__chip"
											style={{ backgroundColor: swatch.hex }}
										/>
										<code>
											{swatch.label}
											<br />
											{swatch.hex.replace('#', '')}
										</code>
									</div>
								))}
							</div>
						</div>

						<hr className="palette-demo__divider" />
					</div>
				);
			})}
		</section>
	);
}
