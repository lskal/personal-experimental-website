import type { CSSProperties, ElementType, ReactNode } from 'react';
import type { TagAccent } from '../Tag/Tag';
import styles from './Card.module.css';

interface CardProps {
	as?: 'div' | 'article' | 'details';
	accent?: TagAccent;
	active?: boolean;
	className?: string;
	children: ReactNode;
}

export function Card({
	as = 'div',
	accent = 'experience',
	active,
	className,
	children,
}: CardProps) {
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
}
