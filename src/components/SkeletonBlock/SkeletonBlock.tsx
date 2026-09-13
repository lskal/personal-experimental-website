import type { SkeletonBlockProps } from '../../types/components';
import styles from './SkeletonBlock.module.css';

export function SkeletonBlock({
	width,
	height,
	variant = 'text',
	className = '',
}: SkeletonBlockProps) {
	return (
		<span
			aria-hidden="true"
			className={`${styles.skeleton} ${styles[variant]} ${className}`}
			style={{ width, height }}
		/>
	);
}
