import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { SkeletonBlock } from '../SkeletonBlock/SkeletonBlock';
import styles from './Header.module.css';

export function Header() {
	const { content, isLoading } = useLanguage();

	return (
		<header className={styles.header}>
			{isLoading ? (
				<SkeletonBlock className={styles.name} width="140px" height="1.1em" />
			) : (
				<span className={styles.name}>{content.hero.name}</span>
			)}
			<div className={styles.actions}>
				<LanguageToggle />
				<ThemeToggle />
			</div>
		</header>
	);
}
