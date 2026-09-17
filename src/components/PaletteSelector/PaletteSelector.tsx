import { useState } from 'react';
import { RotateCcw, Shuffle } from 'lucide-react';
import { usePalette } from '../../hooks/usePalette';
import styles from './PaletteSelector.module.css';

export const PaletteSelector = () => {
	const { paletteName, isDefaultPalette, nextPalette, resetPalette } =
		usePalette();
	const [hasInteracted, setHasInteracted] = useState(false);

	const handleNext = () => {
		setHasInteracted(true);
		nextPalette();
	};

	const handleReset = () => {
		setHasInteracted(true);
		resetPalette();
	};

	const showName = hasInteracted || !isDefaultPalette;

	return (
		<div className={styles.selector}>
			<div className={styles.buttons}>
				{!isDefaultPalette && (
					<button
						type="button"
						className={styles.button}
						onClick={handleReset}
						aria-label="Return to default palette"
						title="Return to default palette"
					>
						<RotateCcw size={18} />
					</button>
				)}
				<button
					type="button"
					className={styles.button}
					onClick={handleNext}
					aria-label="Choose next palette"
					title="Choose next palette"
				>
					<Shuffle size={18} />
				</button>
			</div>
			<span
				className={styles.name}
				style={{ visibility: showName ? 'visible' : 'hidden' }}
			>
				{paletteName}
			</span>
		</div>
	);
};
