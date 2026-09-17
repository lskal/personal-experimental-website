import { Mail, Phone, MapPin } from 'lucide-react';
import {
	GithubIcon,
	LinkedinIcon,
} from '../../components/BrandIcons/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import { SHOW_PHONE } from '../../config/featureFlags';
import { handleFromUrl } from '../../utils/handleFromUrl';
import { ScrollToTopToggle } from '../../components/Toggles/ScrollToTopToggle/ScrollToTopToggle';
import styles from './Contact.module.css';

const CONTACT_ROW_WIDTHS = SHOW_PHONE
	? ['180px', '120px', '140px', '90px', '90px']
	: ['180px', '140px', '90px', '90px'];

export const Contact = () => {
	const { content, isLoading } = useLanguage();
	const { contact, ui } = content;

	if (isLoading) {
		return (
			<footer className={styles.section} aria-labelledby="contact-heading">
				<h2 id="contact-heading" className={styles.title}>
					{ui.sectionTitles.contact}
				</h2>
				<div className={styles.links}>
					{CONTACT_ROW_WIDTHS.map((width, index) => (
						<span key={index} className={styles.link}>
							<SkeletonBlock variant="circle" width="20px" height="20px" />
							<SkeletonBlock width={width} height="1em" />
						</span>
					))}
				</div>
				<div className={styles.scrollToTop}>
					<ScrollToTopToggle />
				</div>
			</footer>
		);
	}

	return (
		<footer className={styles.section} aria-labelledby="contact-heading">
			<h2 id="contact-heading" className={styles.title}>
				{ui.sectionTitles.contact}
			</h2>
			<div className={styles.links}>
				{contact.location && (
					<span className={styles.link}>
						<MapPin size={20} aria-hidden="true" />
						{contact.location}
					</span>
				)}

				{contact.email && (
					<a href={`mailto:${contact.email}`} className={styles.link}>
						<Mail size={20} aria-hidden="true" />
						{contact.email}
					</a>
				)}
				{SHOW_PHONE && contact.phone && (
					<a href={`tel:${contact.phone}`} className={styles.link}>
						<Phone size={20} aria-hidden="true" />
						{contact.phone}
					</a>
				)}
				{contact.githubUrl && (
					<a
						href={contact.githubUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.link}
						aria-label={`GitHub: ${handleFromUrl(contact.githubUrl)} (opens in a new tab)`}
					>
						<GithubIcon size={20} />
						{handleFromUrl(contact.githubUrl)}
					</a>
				)}
				{contact.linkedinUrl && (
					<a
						href={contact.linkedinUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.link}
						aria-label={`LinkedIn: ${handleFromUrl(contact.linkedinUrl)} (opens in a new tab)`}
					>
						<LinkedinIcon size={20} />
						{handleFromUrl(contact.linkedinUrl)}
					</a>
				)}
			</div>
			<div className={styles.scrollToTop}>
				<ScrollToTopToggle />
			</div>
		</footer>
	);
};
