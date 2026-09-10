import './PaletteDemo.css';

// Temporary reference block for the color-palette decision (CLAUDE.md backlog item 1).
// Flip this to true to show it again; set back to false once a palette is chosen.
const SHOW_PALETTE_DEMO = true;

interface Swatch {
	hex: string;
	label: string;
}

interface PaletteBlock {
	title: string;
	core: Swatch[];
	lightBg: string;
	darkBg: string;
	sections: Swatch[];
}

const palettes: PaletteBlock[] = [
	{
		title: 'Palette 1 — Cool blues',
		core: [
			{ hex: '#F0EBD8', label: 'F0EBD8 (light bg)' },
			{ hex: '#748CAB', label: '748CAB' },
			{ hex: '#3E5C76', label: '3E5C76' },
			{ hex: '#1D2D44', label: '1D2D44' },
			{ hex: '#0D1321', label: '0D1321 (dark bg)' },
		],
		lightBg: '#F0EBD8',
		darkBg: '#0D1321',
		sections: [
			{ hex: '#C8D8EA', label: 'Experience' },
			{ hex: '#90B0D5', label: 'Projects' },
			{ hex: '#5989C0', label: 'Skills' },
			{ hex: '#386394', label: 'Education' },
			{ hex: '#233E5C', label: 'Languages' },
		],
	},
	{
		title: 'Palette 2 — Botanical greens',
		core: [
			{ hex: '#D7F9F1', label: 'D7F9F1 (light bg)' },
			{ hex: '#AFBC88', label: 'AFBC88' },
			{ hex: '#7AA095', label: '7AA095' },
			{ hex: '#618B4A', label: '618B4A' },
			{ hex: '#40531B', label: '40531B (dark bg)' },
		],
		lightBg: '#D7F9F1',
		darkBg: '#40531B',
		sections: [
			{ hex: '#C8D8EA', label: 'Experience' },
			{ hex: '#90B0D5', label: 'Projects' },
			{ hex: '#5989C0', label: 'Skills' },
			{ hex: '#386394', label: 'Education' },
			{ hex: '#233E5C', label: 'Languages' },
		],
	},
	{
		title: 'Palette 3 — Vibrant multi-hue',
		core: [
			{ hex: '#FDFFFC', label: 'FDFFFC (light bg)' },
			{ hex: '#F1D302', label: 'F1D302' },
			{ hex: '#235789', label: '235789' },
			{ hex: '#FF5A36', label: 'FF5A36' },
			{ hex: '#161925', label: '161925 (dark bg)' },
		],
		lightBg: '#FDFFFC',
		darkBg: '#161925',
		sections: [
			{ hex: '#1C7ED6', label: 'Experience' },
			{ hex: '#2FB380', label: 'Projects' },
			{ hex: '#F1D302', label: 'Skills' },
			{ hex: '#FF5A36', label: 'Education' },
			{ hex: '#E83E8C', label: 'Languages' },
		],
	},
	{
		title: 'Palette 4 — Tacky sunset',
		core: [
			{ hex: '#BBDEF0', label: 'BBDEF0 (light bg)' },
			{ hex: '#EFCA08', label: 'EFCA08' },
			{ hex: '#F49F0A', label: 'F49F0A' },
			{ hex: '#F08700', label: 'F08700' },
			{ hex: '#00A6A6', label: '00A6A6 (dark bg)' },
		],
		lightBg: '#BBDEF0',
		darkBg: '#00A6A6',
		sections: [
			{ hex: '#F4A261', label: 'Experience' },
			{ hex: '#E76F51', label: 'Projects' },
			{ hex: '#E9C46A', label: 'Skills' },
			{ hex: '#D62828', label: 'Education' },
			{ hex: '#9B5DE5', label: 'Languages' },
		],
	},
	{
		title: 'Palette 5 — Tacky sunset colorful (warm shades)',
		core: [
			{ hex: '#BBDEF0', label: 'BBDEF0 (light bg)' },
			{ hex: '#EFCA08', label: 'EFCA08' },
			{ hex: '#F49F0A', label: 'F49F0A' },
			{ hex: '#F08700', label: 'F08700' },
			{ hex: '#00A6A6', label: '00A6A6 (dark bg)' },
		],
		lightBg: '#BBDEF0',
		darkBg: '#00A6A6',
		sections: [
			{ hex: '#FFE066', label: 'Experience' },
			{ hex: '#FFC300', label: 'Projects' },
			{ hex: '#FF8800', label: 'Skills' },
			{ hex: '#FF5A36', label: 'Education' },
			{ hex: '#C1272D', label: 'Languages' },
		],
	},
	{
		title: 'Palette 6 — Tacky sunset colorful (vibrant hues)',
		core: [
			{ hex: '#BBDEF0', label: 'BBDEF0 (light bg)' },
			{ hex: '#EFCA08', label: 'EFCA08' },
			{ hex: '#F49F0A', label: 'F49F0A' },
			{ hex: '#F08700', label: 'F08700' },
			{ hex: '#00A6A6', label: '00A6A6 (dark bg)' },
		],
		lightBg: '#BBDEF0',
		darkBg: '#00A6A6',
		sections: [
			{ hex: '#1C7ED6', label: 'Experience' },
			{ hex: '#2FB380', label: 'Projects' },
			{ hex: '#F1D302', label: 'Skills' },
			{ hex: '#FF5A36', label: 'Education' },
			{ hex: '#E83E8C', label: 'Languages' },
		],
	},
	{
		title: 'Palette 7 — Sage & terracotta',
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
		sections: [
			{ hex: '#F2C57C', label: 'Experience' },
			{ hex: '#DDAE7E', label: 'Projects' },
			{ hex: '#EF6F6C', label: 'Skills' },
			{ hex: '#F4A9A8', label: 'Education' },
			{ hex: '#E2C391', label: 'Languages' },
		],
	},
	{
		title: 'Palette 8 — Violet garden',
		core: [
			{ hex: '#8963BA', label: '8963BA (light bg)' },
			{ hex: '#AFE3C0', label: 'AFE3C0' },
			{ hex: '#90C290', label: '90C290' },
			{ hex: '#688B58', label: '688B58' },
			{ hex: '#54428E', label: '54428E (dark bg)' },
		],
		lightBg: '#8963BA',
		darkBg: '#54428E',
		sections: [
			{ hex: '#D4F0DE', label: 'Experience' },
			{ hex: '#AFE3C0', label: 'Projects' },
			{ hex: '#90C290', label: 'Skills' },
			{ hex: '#688B58', label: 'Education' },
			{ hex: '#4A6741', label: 'Languages' },
		],
	},
	{
		title: 'Palette 9 — Indigo storm',
		core: [
			{ hex: '#347FC4', label: '347FC4 (light bg)' },
			{ hex: '#989FCE', label: '989FCE' },
			{ hex: '#7D6B91', label: '7D6B91' },
			{ hex: '#5D536B', label: '5D536B' },
			{ hex: '#272838', label: '272838 (dark bg)' },
		],
		lightBg: '#347FC4',
		darkBg: '#272838',
		sections: [
			{ hex: '#B8BEDE', label: 'Experience' },
			{ hex: '#989FCE', label: 'Projects' },
			{ hex: '#7D6B91', label: 'Skills' },
			{ hex: '#5D536B', label: 'Education' },
			{ hex: '#453D52', label: 'Languages' },
		],
	},
	{
		title: 'Palette 10 — Forest twilight',
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
		sections: [
			{ hex: '#8FB3B8', label: 'Experience' },
			{ hex: '#6A8D92', label: 'Projects' },
			{ hex: '#5B6E80', label: 'Skills' },
			{ hex: '#4B4E6D', label: 'Education' },
			{ hex: '#A1E887', label: 'Languages' },
		],
	},
];

export function PaletteDemo() {
	if (!SHOW_PALETTE_DEMO) {
		return null;
	}

	return (
		<section className="palette-demo" aria-label="Color palette options">
			{palettes.map((palette) => (
				<div className="palette-demo__block" key={palette.title}>
					<div className="palette-demo__header">
						<h2>{palette.title}</h2>
						<div className="palette-demo__row">
							{palette.core.map((swatch) => (
								<div className="palette-demo__swatch" key={swatch.label}>
									<span className="palette-demo__chip" style={{ backgroundColor: swatch.hex }} />
									<code>{swatch.label}</code>
								</div>
							))}
						</div>
					</div>

					<div
						className="palette-demo__mode palette-demo__mode--light"
						style={{ backgroundColor: palette.lightBg }}
					>
						<p className="palette-demo__mode-label">Light mode ({palette.lightBg.replace('#', '')})</p>
						<div className="palette-demo__row">
							{palette.sections.map((swatch) => (
								<div className="palette-demo__swatch" key={swatch.label}>
									<span className="palette-demo__chip" style={{ backgroundColor: swatch.hex }} />
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
						<p className="palette-demo__mode-label">Dark mode ({palette.darkBg.replace('#', '')})</p>
						<div className="palette-demo__row">
							{palette.sections.map((swatch) => (
								<div className="palette-demo__swatch" key={swatch.label}>
									<span className="palette-demo__chip" style={{ backgroundColor: swatch.hex }} />
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
			))}
		</section>
	);
}
