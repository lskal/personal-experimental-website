import type { ToggleProps } from '../../../types/components';
import styles from './Toggle.module.css';

export const Toggle = ({
	onClick,
	ariaLabel,
	title,
	wide,
	children,
}: ToggleProps) => {
	const classes = [styles.toggle, wide && styles.wide]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			type="button"
			className={classes}
			onClick={onClick}
			aria-label={ariaLabel}
			title={title}
		>
			{children}
		</button>
	);
};
