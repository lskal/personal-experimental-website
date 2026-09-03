import { useLanguage } from '../../hooks/useLanguage';
import styles from './Languages.module.css';

export function Languages() {
	const { content } = useLanguage();
	const labels = content.ui.languageLabels;

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.languages}</h2>
			<div className={styles.grid}>
				{content.languages.map(lang => (
					<div key={lang.language} className={styles.card}>
						<p className={styles.language}>{lang.language}</p>
						<ul className={styles.levels}>
							<li className={styles.levelRow}>
								<span className={styles.levelLabel}>{labels.listening}</span>
								<span className={styles.levelValue}>{lang.listening}</span>
							</li>
							<li className={styles.levelRow}>
								<span className={styles.levelLabel}>{labels.reading}</span>
								<span className={styles.levelValue}>{lang.reading}</span>
							</li>
							<li className={styles.levelRow}>
								<span className={styles.levelLabel}>{labels.interaction}</span>
								<span className={styles.levelValue}>{lang.interaction}</span>
							</li>
							<li className={styles.levelRow}>
								<span className={styles.levelLabel}>
									{labels.spokenProduction}
								</span>
								<span className={styles.levelValue}>
									{lang.spokenProduction}
								</span>
							</li>
							<li className={styles.levelRow}>
								<span className={styles.levelLabel}>{labels.writing}</span>
								<span className={styles.levelValue}>{lang.writing}</span>
							</li>
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
