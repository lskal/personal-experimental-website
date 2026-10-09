import { useId, useState, type MouseEvent } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import type { CompanyTimelineItemProps } from '../../types/components';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import styles from './CompanyTimelineItem.module.css';

export const CompanyTimelineItem = ({
	entry,
	defaultOpen = false,
}: CompanyTimelineItemProps) => {
	const [open, setOpen] = useState(defaultOpen);
	const panelId = useId();

	// Mouse convenience: the whole header toggles, as the old <summary> did.
	// Keyboard/screen-reader users toggle via the chevron <button>; clicks on
	// the company link are left alone.
	const handleHeaderClick = (event: MouseEvent<HTMLDivElement>) => {
		if ((event.target as HTMLElement).closest('a, button')) {
			return;
		}
		setOpen(current => !current);
	};

	return (
		<div className={styles.item}>
			<span className={styles.dot} />
			<Card
				as="div"
				active={open}
				className={[styles.details, open && styles.open].filter(Boolean).join(' ')}
			>
				<div className={styles.summary} onClick={handleHeaderClick}>
					<div className={styles.summaryText}>
						<span className={styles.company}>
							{entry.company}
							{entry.companyUrl && (
								<a
									href={entry.companyUrl}
									target="_blank"
									rel="noreferrer"
									className={styles.companyLink}
									aria-label={`${entry.company} website (opens in a new tab)`}
								>
									<ExternalLink size={16} aria-hidden="true" />
								</a>
							)}
						</span>
						<span className={styles.role}>{entry.role}</span>
						<span className={styles.period}>{entry.period}</span>
						<p className={styles.companySummary}>{entry.summary}</p>
					</div>
					<button
						type="button"
						className={styles.toggle}
						aria-expanded={open}
						aria-controls={panelId}
						aria-label={entry.company}
						onClick={() => setOpen(current => !current)}
					>
						<ChevronDown className={styles.chevron} size={20} aria-hidden="true" />
					</button>
				</div>

				<div id={panelId} className={styles.projects} hidden={!open}>
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
