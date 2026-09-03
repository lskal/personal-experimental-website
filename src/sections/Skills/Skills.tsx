import { useLanguage } from '../../hooks/useLanguage';
import styles from './Skills.module.css';

export function Skills() {
	const { content } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.skills}</h2>
			<div className={styles.grid}>
				{content.skills.map(group => (
					<div key={group.category} className={styles.category}>
						<h3 className={styles.categoryName}>{group.category}</h3>
						<ul className={styles.tags}>
							{group.skills.map(skill => (
								<li key={skill} className={styles.tag}>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
