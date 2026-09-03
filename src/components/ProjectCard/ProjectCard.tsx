import { Icon } from '@iconify/react';
import { useLanguage } from '../../hooks/useLanguage';
import type { PersonalProject } from '../../content/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
	project: PersonalProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const { content } = useLanguage();

	return (
		<article className={styles.card}>
			<p className={styles.name}>{project.name}</p>
			<p className={styles.description}>{project.description}</p>
			<ul className={styles.stack}>
				{project.stack.map(tech => (
					<li key={tech} className={styles.tag}>
						{tech}
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
							<Icon icon="lucide:external-link" width={16} height={16} />
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
							<Icon icon="lucide:github" width={16} height={16} />
							{content.ui.actions.viewRepo}
						</a>
					)}
				</div>
			)}
		</article>
	);
}
