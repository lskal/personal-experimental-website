import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import styles from './Languages.module.css';

const LEVEL_ROW_COUNT = 5;

export function Languages() {
	const { content, isLoading } = useLanguage();
	const labels = content.ui.languageLabels;

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.languages}</h2>
			<div className={styles.grid}>
				{content.languages.map((lang, index) =>
					isLoading ? (
						<div key={index} className={styles.card}>
							<SkeletonBlock
								className={styles.language}
								width="120px"
								height="1.1em"
							/>
							<ul className={styles.levels}>
								{Array.from({ length: LEVEL_ROW_COUNT }, (_, rowIndex) => (
									<li key={rowIndex} className={styles.levelRow}>
										<SkeletonBlock width="90px" height="1em" />
										<SkeletonBlock variant="pill" width="32px" height="1.2em" />
									</li>
								))}
							</ul>
						</div>
					) : (
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
					),
				)}
			</div>
		</section>
	);
}
