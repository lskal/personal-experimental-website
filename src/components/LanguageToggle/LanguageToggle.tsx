import { useLanguage } from '../../hooks/useLanguage';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
	const { locale, toggleLocale } = useLanguage();
	const nextLocaleLabel = locale === 'en' ? 'IT' : 'EN';

	return (
		<button
			type="button"
			className={styles.toggle}
			onClick={toggleLocale}
			aria-label={`Switch language to ${nextLocaleLabel}`}
			title={`Switch language to ${nextLocaleLabel}`}
		>
			{nextLocaleLabel}
		</button>
	);
}
