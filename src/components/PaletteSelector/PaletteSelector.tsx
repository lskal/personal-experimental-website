import { useState } from 'react';
import { Icon } from '@iconify/react';
import { usePalette } from '../../hooks/usePalette';
import styles from './PaletteSelector.module.css';

export function PaletteSelector() {
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
						<Icon icon="lucide:rotate-ccw" width={18} height={18} />
					</button>
				)}
				<button
					type="button"
					className={styles.button}
					onClick={handleNext}
					aria-label="Choose next palette"
					title="Choose next palette"
				>
					<Icon icon="lucide:shuffle" width={18} height={18} />
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
}
