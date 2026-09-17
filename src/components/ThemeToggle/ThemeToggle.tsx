import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
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
			{theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
		</button>
	);
};
