import { Icon } from '@iconify/react';
import { usePalette } from '../../hooks/usePalette';
import styles from './PaletteSelector.module.css';

export function PaletteSelector() {
	const { paletteName, isDefaultPalette, nextPalette, resetPalette } =
		usePalette();

	return (
		<div className={styles.selector}>
			<div className={styles.buttons}>
				{!isDefaultPalette && (
					<button
						type="button"
						className={styles.button}
						onClick={resetPalette}
						aria-label="Return to default palette"
						title="Return to default palette"
					>
						<Icon icon="lucide:rotate-ccw" width={18} height={18} />
					</button>
				)}
				<button
					type="button"
					className={styles.button}
					onClick={nextPalette}
					aria-label="Choose next palette"
					title="Choose next palette"
				>
					<Icon icon="lucide:shuffle" width={18} height={18} />
				</button>
			</div>
			<span className={styles.name}>{paletteName}</span>
		</div>
	);
}
