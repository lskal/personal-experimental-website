import { ToggleButtons } from '../ToggleButtons/ToggleButtons';
import { useStickyToggleVisibility } from '../../hooks/useStickyToggleVisibility';
import styles from './StickyToggles.module.css';

export function StickyToggles() {
	const visible = useStickyToggleVisibility('#hero');

	return (
		<div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
			<ToggleButtons />
		</div>
	);
}
