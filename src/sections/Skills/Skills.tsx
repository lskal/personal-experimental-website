import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import styles from './Skills.module.css';

export function Skills() {
	const { content, isLoading } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.skills}</h2>
			<div className={styles.grid}>
				{content.skills.map((group, groupIndex) => (
					<div key={isLoading ? groupIndex : group.category} className={styles.category}>
						{isLoading ? (
							<SkeletonBlock
								className={styles.categoryName}
								width="120px"
								height="1.1em"
							/>
						) : (
							<p className={styles.categoryName}>{group.category}</p>
						)}
						<ul className={styles.tags}>
							{group.skills.map((skill, skillIndex) =>
								isLoading ? (
									<li key={skillIndex}>
										<SkeletonBlock variant="pill" width="60px" height="1.2em" />
									</li>
								) : (
									<li key={skill} className={styles.tag}>
										{skill}
									</li>
								),
							)}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
