import { Icon } from '@iconify/react';
import type { ExperienceEntry } from '../../content/types';
import styles from './CompanyTimelineItem.module.css';

interface CompanyTimelineItemProps {
	entry: ExperienceEntry;
	defaultOpen?: boolean;
}

export function CompanyTimelineItem({
	entry,
	defaultOpen = false,
}: CompanyTimelineItemProps) {
	return (
		<div className={styles.item}>
			<span className={styles.dot} />
			<details className={styles.details} open={defaultOpen}>
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
					<Icon
						icon="lucide:chevron-down"
						className={styles.chevron}
						width={20}
						height={20}
					/>
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
										<li key={tool} className={styles.tag}>
											{tool}
										</li>
									))}
								</ul>
							)}
						</article>
					))}
				</div>
			</details>
		</div>
	);
}
