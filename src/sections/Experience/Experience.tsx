import { useLanguage } from '../../hooks/useLanguage';
import { CompanyTimelineItem } from '../../components/CompanyTimelineItem/CompanyTimelineItem';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import itemStyles from '../../components/CompanyTimelineItem/CompanyTimelineItem.module.css';
import styles from './Experience.module.css';

export function Experience() {
	const { content, isLoading } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.experience}</h2>
			<div className={styles.timeline}>
				{isLoading
					? content.experience.map((_, index) => (
							<div key={index} className={itemStyles.item}>
								<span className={itemStyles.dot} />
								<div className={itemStyles.details}>
									<div className={itemStyles.summaryText}>
										<SkeletonBlock
											className={itemStyles.company}
											width="160px"
											height="1.1em"
										/>
										<SkeletonBlock
											className={itemStyles.role}
											width="140px"
											height="1em"
										/>
										<SkeletonBlock
											className={itemStyles.period}
											width="120px"
											height="0.9em"
										/>
										<SkeletonBlock
											className={itemStyles.companySummary}
											width="100%"
											height="1em"
										/>
									</div>
								</div>
							</div>
						))
					: content.experience.map((entry, index) => (
							<CompanyTimelineItem
								key={entry.company}
								entry={entry}
								defaultOpen={index === 0}
							/>
						))}
			</div>
		</section>
	);
}
