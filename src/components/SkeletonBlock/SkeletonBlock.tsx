import styles from './SkeletonBlock.module.css';

interface SkeletonBlockProps {
	/** Omit to let the className's own CSS control sizing (e.g. reusing an existing fixed-size class). */
	width?: string;
	/** Omit to let the className's own CSS control sizing (e.g. reusing an existing fixed-size class). */
	height?: string;
	variant?: 'text' | 'block' | 'pill' | 'circle';
	className?: string;
}

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
