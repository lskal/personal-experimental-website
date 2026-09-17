import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import { Tag } from '../../components/Tag/Tag';
import { Card } from '../../components/Card/Card';
import styles from './Languages.module.css';

const LEVEL_ROW_COUNT = 5;

export const Languages = () => {
	const { content, isLoading } = useLanguage();
	const labels = content.ui.languageLabels;

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.languages}</h2>
			<div className={styles.grid}>
				{content.languages.map((lang, index) =>
					isLoading ? (
						<Card key={index} className={styles.card}>
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
						</Card>
					) : (
						<Card key={lang.language} className={styles.card}>
							<p className={styles.language}>{lang.language}</p>
							<ul className={styles.levels}>
								<li className={styles.levelRow}>
									<span className={styles.levelLabel}>{labels.listening}</span>
									<Tag accent="languages">{lang.listening}</Tag>
								</li>
								<li className={styles.levelRow}>
									<span className={styles.levelLabel}>{labels.reading}</span>
									<Tag accent="languages">{lang.reading}</Tag>
								</li>
								<li className={styles.levelRow}>
									<span className={styles.levelLabel}>{labels.interaction}</span>
									<Tag accent="languages">{lang.interaction}</Tag>
								</li>
								<li className={styles.levelRow}>
									<span className={styles.levelLabel}>{labels.spokenProduction}</span>
									<Tag accent="languages">{lang.spokenProduction}</Tag>
								</li>
								<li className={styles.levelRow}>
									<span className={styles.levelLabel}>{labels.writing}</span>
									<Tag accent="languages">{lang.writing}</Tag>
								</li>
							</ul>
						</Card>
					),
				)}
			</div>
		</section>
	);
};
