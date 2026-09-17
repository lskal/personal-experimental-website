import { useLanguage } from '../../hooks/useLanguage';
import styles from './SkipLink.module.css';

export const SkipLink = () => {
	const { content } = useLanguage();

	return (
		<a href="#main-content" className={styles.skipLink}>
			{content.ui.a11y.skipToContent}
		</a>
	);
};
