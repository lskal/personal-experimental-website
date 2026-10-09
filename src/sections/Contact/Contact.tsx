import { Mail, MapPin } from 'lucide-react';
import {
	FlagIcon,
	GithubIcon,
	LinkedinIcon,
} from '../../components/BrandIcons/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import {
	SHOW_EMAIL,
	SHOW_GITHUB,
	SHOW_LINKEDIN,
	SHOW_LOCATION,
	SHOW_PHONE,
} from '../../config/featureFlags';
import { handleFromUrl } from '../../utils/handleFromUrl';
import { getVisitorCountry } from '../../utils/visitorCountry';
import { telHref, visibleOffices } from '../../utils/visibleOffices';
import { ScrollToTopToggle } from '../../components/Toggles/ScrollToTopToggle/ScrollToTopToggle';
import styles from './Contact.module.css';

// Skeleton row widths: location, email, one per visible phone, GitHub, LinkedIn.
const contactRowWidths = (phoneCount: number): string[] => [
	'180px',
	'140px',
	...Array.from({ length: SHOW_PHONE ? phoneCount : 0 }, () => '120px'),
	'90px',
	'90px',
];

export const Contact = () => {
	const { content, isLoading, locale } = useLanguage();
	const { contact, ui } = content;
	const offices = visibleOffices(contact.offices, getVisitorCountry(), locale);

	if (isLoading) {
		return (
			<footer className={styles.section} aria-labelledby="contact-heading">
				<h2 id="contact-heading" className={styles.title}>
					{ui.sectionTitles.contact}
				</h2>
				<div className={styles.links}>
					{contactRowWidths(offices.length).map((width, index) => (
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
				{SHOW_LOCATION && offices.length > 0 && (
					<span className={styles.link}>
						<MapPin size={20} aria-hidden="true" />
						{offices.map(office => office.city).join(' || ')}
					</span>
				)}

				{SHOW_EMAIL && contact.email && (
					<a href={`mailto:${contact.email}`} className={styles.link}>
						<Mail size={20} aria-hidden="true" />
						{contact.email}
					</a>
				)}
				{SHOW_PHONE &&
					offices.map(office => (
						<a
							key={office.country}
							href={telHref(office.phone)}
							className={styles.link}
						>
							<FlagIcon country={office.country} size={20} />
							{office.phone}
						</a>
					))}
				{SHOW_GITHUB && contact.githubUrl && (
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
				{SHOW_LINKEDIN && contact.linkedinUrl && (
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
