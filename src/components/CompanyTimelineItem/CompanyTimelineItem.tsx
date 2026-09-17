import { ChevronDown } from 'lucide-react';
import type { CompanyTimelineItemProps } from '../../types/components';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import styles from './CompanyTimelineItem.module.css';

export const CompanyTimelineItem = ({
	entry,
	defaultOpen = false,
}: CompanyTimelineItemProps) => {
	return (
		<div className={styles.item}>
			<span className={styles.dot} />
			<Card as="details" active={defaultOpen} className={styles.details}>
				<summary className={styles.summary}>
					<div className={styles.summaryText}>
						<span className={styles.company}>
							{entry.companyUrl ? (
								<a href={entry.companyUrl} target="_blank" rel="noreferrer">
									{entry.company}
								</a>
							) : (
								entry.company
							)}
						</span>
						<span className={styles.role}>{entry.role}</span>
						<span className={styles.period}>{entry.period}</span>
						<p className={styles.companySummary}>{entry.summary}</p>
					</div>
					<ChevronDown className={styles.chevron} size={20} />
				</summary>

				<div className={styles.projects}>
					{entry.projects.map(project => (
						<article key={project.name} className={styles.project}>
							<p className={styles.projectName}>
								{project.url ? (
									<a href={project.url} target="_blank" rel="noreferrer">
										{project.name}
									</a>
								) : (
									project.name
								)}
							</p>
							<p className={styles.projectMeta}>
								{[project.client, project.sector, project.period]
									.filter(Boolean)
									.join(' · ')}
							</p>
							<ul className={styles.activities}>
								{project.activities.map(activity => (
									<li key={activity}>{activity}</li>
								))}
							</ul>
							{project.tools.length > 0 && (
								<ul className={styles.tools}>
									{project.tools.map(tool => (
										<li key={tool}>
											<Tag accent="experience">{tool}</Tag>
										</li>
									))}
								</ul>
							)}
						</article>
					))}
				</div>
			</Card>
		</div>
	);
};
