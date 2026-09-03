import { Icon } from '@iconify/react';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Contact.module.css';

export function Contact() {
	const { content } = useLanguage();
	const { contact, ui } = content;

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{ui.sectionTitles.contact}</h2>
			<div className={styles.links}>
				<a href={`mailto:${contact.email}`} className={styles.link}>
					<Icon icon="lucide:mail" width={20} height={20} />
					{contact.email}
				</a>
				<a href={`tel:${contact.phone}`} className={styles.link}>
					<Icon icon="lucide:phone" width={20} height={20} />
					{contact.phone}
				</a>
				<span className={styles.link}>
					<Icon icon="lucide:map-pin" width={20} height={20} />
					{contact.location}
				</span>
				{contact.githubUrl && (
					<a
						href={contact.githubUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.link}
					>
						<Icon icon="lucide:github" width={20} height={20} />
						GitHub
					</a>
				)}
				{contact.linkedinUrl && (
					<a
						href={contact.linkedinUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.link}
					>
						<Icon icon="lucide:linkedin" width={20} height={20} />
						LinkedIn
					</a>
				)}
			</div>
		</section>
	);
}
