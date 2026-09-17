import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';
import { Toggle } from '../Toggle/Toggle';

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const { content } = useLanguage();

	const label =
		theme === 'light'
			? content.ui.themeToggle.switchToDark
			: content.ui.themeToggle.switchToLight;

	return (
		<Toggle onClick={toggleTheme} ariaLabel={label} title={label}>
			{theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
		</Toggle>
	);
};
