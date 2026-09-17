import type { CSSProperties } from 'react';
import type { TagProps } from '../../types/components';
import styles from './Tag.module.css';

export const Tag = ({ accent, children }: TagProps) => {
	const style = {
		'--tag-bg': `var(--color-${accent})`,
		'--tag-color': `var(--color-${accent}-font)`,
	} as CSSProperties;

	return (
		<span className={styles.tag} style={style}>
			{children}
		</span>
	);
};
