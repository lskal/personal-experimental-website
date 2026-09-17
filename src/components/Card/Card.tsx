import type { CSSProperties, ElementType } from 'react';
import type { CardProps } from '../../types/components';
import styles from './Card.module.css';

export const Card = ({
	as = 'div',
	accent = 'experience',
	active,
	className,
	children,
}: CardProps) => {
	const Element = as as ElementType;
	const style = {
		'--card-accent': `var(--color-${accent})`,
		'--card-accent-rgb': `var(--color-${accent}-rgb)`,
	} as CSSProperties;
	const classes = [styles.card, active && styles.active, className]
		.filter(Boolean)
		.join(' ');
	const nativeProps = as === 'details' ? { open: active } : {};

	return (
		<Element className={classes} style={style} {...nativeProps}>
			{children}
		</Element>
	);
};
