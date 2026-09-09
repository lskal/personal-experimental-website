import { useLanguage } from '../../hooks/useLanguage';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import cardStyles from '../../components/ProjectCard/ProjectCard.module.css';
import styles from './Projects.module.css';

export function Projects() {
	const { content, isLoading } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.projects}</h2>
			<div className={styles.grid}>
				{isLoading
					? content.personalProjects.map((project, index) => (
							<article key={index} className={cardStyles.card}>
								<SkeletonBlock
									className={cardStyles.name}
									width="160px"
									height="1.1em"
								/>
								<SkeletonBlock
									className={cardStyles.description}
									width="100%"
									height="1em"
								/>
								<ul className={cardStyles.stack}>
									{project.stack.map((_, tagIndex) => (
										<li key={tagIndex}>
											<SkeletonBlock variant="pill" width="60px" height="1.2em" />
										</li>
									))}
								</ul>
							</article>
						))
					: content.personalProjects.map(project => (
							<ProjectCard key={project.name} project={project} />
						))}
			</div>
		</section>
	);
}
