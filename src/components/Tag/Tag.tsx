import type { CSSProperties } from 'react';
import type { TagProps } from '../../types/components';
import styles from './Tag.module.css';

export function Tag({ accent, children }: TagProps) {
	const style = {
		'--tag-bg': `rgba(var(--color-${accent}-rgb), 0.12)`,
		'--tag-color': `var(--color-${accent})`,
	} as CSSProperties;

	return (
		<span className={styles.tag} style={style}>
			{children}
		</span>
	);
}
