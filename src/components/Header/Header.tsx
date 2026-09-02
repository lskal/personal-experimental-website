import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import styles from './Header.module.css';

export function Header() {
	const { content } = useLanguage();

	return (
		<header className={styles.header}>
			<span className={styles.name}>{content.hero.name}</span>
			<div className={styles.actions}>
				<LanguageToggle />
				<ThemeToggle />
			</div>
		</header>
	);
}
