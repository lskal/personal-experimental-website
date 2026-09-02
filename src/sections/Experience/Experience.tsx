import { useLanguage } from '../../hooks/useLanguage';
import { CompanyTimelineItem } from '../../components/CompanyTimelineItem/CompanyTimelineItem';
import styles from './Experience.module.css';

export function Experience() {
	const { content } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.experience}</h2>
			<div className={styles.timeline}>
				{content.experience.map((entry, index) => (
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
