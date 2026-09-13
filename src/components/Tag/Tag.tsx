import type { ReactNode, CSSProperties } from 'react';
import styles from './Tag.module.css';

type TagAccent = 'skills' | 'projects' | 'languages' | 'experience';

interface TagProps {
	accent: TagAccent;
	children: ReactNode;
}

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
