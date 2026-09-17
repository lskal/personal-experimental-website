import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../BrandIcons/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import type { ProjectCardProps } from '../../types/components';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const { content } = useLanguage();

	return (
		<Card as="article" className={styles.card}>
			<div className={styles.header}>
				<p className={styles.name}>{project.name}</p>
				{project.badge && <span className={styles.badge}>{project.badge}</span>}
			</div>
			<p className={styles.description}>{project.description}</p>
			<ul className={styles.stack}>
				{project.stack.map(tech => (
					<li key={tech}>
						<Tag accent="projects">{tech}</Tag>
					</li>
				))}
			</ul>
			{(project.demoUrl || project.repoUrl) && (
				<div className={styles.links}>
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noreferrer"
							className={styles.link}
						>
							<ExternalLink size={16} />
							{content.ui.actions.viewProject}
						</a>
					)}
					{project.repoUrl && (
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noreferrer"
							className={styles.link}
						>
							<GithubIcon size={16} />
							{content.ui.actions.viewRepo}
						</a>
					)}
				</div>
			)}
		</Card>
	);
};
