import { useLanguage } from '../../hooks/useLanguage';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
	const { content } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.projects}</h2>
			<div className={styles.grid}>
				{content.personalProjects.map(project => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</section>
	);
}
