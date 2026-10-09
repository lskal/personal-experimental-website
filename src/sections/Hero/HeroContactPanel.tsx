import { Mail, MapPin } from 'lucide-react';
import {
	FlagIcon,
	GithubIcon,
	LinkedinIcon,
	PersonalityIcon,
} from '../../components/BrandIcons/BrandIcons';
import { Card } from '../../components/Card/Card';
import { useLanguage } from '../../hooks/useLanguage';
import {
	SHOW_EMAIL,
	SHOW_GITHUB,
	SHOW_LINKEDIN,
	SHOW_LOCATION,
	SHOW_MBTI,
	SHOW_PHONE,
} from '../../config/featureFlags';
import { handleFromUrl } from '../../utils/handleFromUrl';
import { getVisitorCountry } from '../../utils/visitorCountry';
import { telHref, visibleOffices } from '../../utils/visibleOffices';
import styles from './HeroContactPanel.module.css';

export const HeroContactPanel = () => {
	const { content, locale } = useLanguage();
	const { contact, hero } = content;
	const offices = visibleOffices(contact.offices, getVisitorCountry(), locale);

	return (
		<Card as="div" accent="experience" className={styles.panel}>
			<ul className={styles.list}>
				{SHOW_LOCATION && offices.length > 0 && (
					<li className={styles.row}>
						<MapPin size={18} aria-hidden="true" />
						{offices.map(office => office.city).join(' || ')}
					</li>
				)}
				{SHOW_EMAIL && contact.email && (
					<li className={styles.row}>
						<Mail size={18} aria-hidden="true" />
						<a href={`mailto:${contact.email}`}>{contact.email}</a>
					</li>
				)}
				{SHOW_PHONE &&
					offices.length > 0 &&
					offices.map(office => (
						<li key={office.country} className={styles.row}>
							<FlagIcon country={office.country} size={18} />
							<a href={telHref(office.phone)}>{office.phone}</a>
						</li>
					))}
				{SHOW_GITHUB && contact.githubUrl && (
					<li className={styles.row}>
						<GithubIcon size={18} />
						<a
							href={contact.githubUrl}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub (opens in a new tab)"
						>
							{handleFromUrl(contact.githubUrl)}
						</a>
					</li>
				)}
				{SHOW_LINKEDIN && contact.linkedinUrl && (
					<li className={styles.row}>
						<LinkedinIcon size={18} />
						<a
							href={contact.linkedinUrl}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn (opens in a new tab)"
						>
							{handleFromUrl(contact.linkedinUrl)}
						</a>
					</li>
				)}
				{SHOW_MBTI && hero.mbtiUrl && (
					<li className={styles.row}>
						<PersonalityIcon size={18} />
						{hero.mbtiUrl ? (
							<a
								href={hero.mbtiUrl}
								target="_blank"
								rel="noreferrer"
								aria-label={`16Personalities profile: ${hero.mbti} (opens in a new tab)`}
							>
								{hero.mbti}
							</a>
						) : (
							hero.mbti
						)}
					</li>
				)}
			</ul>
		</Card>
	);
};
