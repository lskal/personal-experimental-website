import { Icon } from '@iconify/react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const { content } = useLanguage();

	const label =
		theme === 'light'
			? content.ui.themeToggle.switchToDark
			: content.ui.themeToggle.switchToLight;

	return (
		<button
			type="button"
			className={styles.toggle}
			onClick={toggleTheme}
			aria-label={label}
			title={label}
		>
			<Icon
				icon={theme === 'light' ? 'lucide:moon' : 'lucide:sun'}
				width={20}
				height={20}
			/>
		</button>
	);
}
