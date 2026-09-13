import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import { Card } from '../../components/Card/Card';
import styles from './Education.module.css';

export function Education() {
	const { content, isLoading } = useLanguage();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{content.ui.sectionTitles.education}</h2>

			<div className={styles.grid}>
				{content.education.map((entry, index) =>
					isLoading ? (
						<Card key={index} className={styles.card}>
							<SkeletonBlock className={styles.entryTitle} width="100%" height="1em" />
							<SkeletonBlock className={styles.entryMeta} width="70%" height="0.9em" />
						</Card>
					) : (
						<Card key={entry.title} className={styles.card}>
							<p className={styles.entryTitle}>{entry.title}</p>
							<p className={styles.entryMeta}>
								{entry.url ? (
									<a href={entry.url} target="_blank" rel="noreferrer">
										{entry.institution}
									</a>
								) : (
									entry.institution
								)}
								{' · '}
								{entry.period}
							</p>
						</Card>
					),
				)}
			</div>

			<h3 className={styles.subtitle}>
				{content.ui.sectionTitles.certifications}
			</h3>
			<div className={styles.grid}>
				{content.certifications.map((cert, index) =>
					isLoading ? (
						<Card key={index} className={styles.card}>
							<SkeletonBlock className={styles.entryTitle} width="90%" height="1em" />
							<SkeletonBlock className={styles.entryMeta} width="60%" height="0.9em" />
						</Card>
					) : (
						<Card key={cert.name} className={styles.card}>
							<div className={styles.certRow}>
								<div>
									<p className={styles.entryTitle}>{cert.name}</p>
									<p className={styles.entryMeta}>{cert.date}</p>
								</div>
								{cert.url && (
									<a
										href={cert.url}
										target="_blank"
										rel="noreferrer"
										className={styles.certLink}
									>
										<ExternalLink size={18} />
									</a>
								)}
							</div>
						</Card>
					),
				)}
			</div>
		</section>
	);
}
