import { Mail, Phone, MapPin } from 'lucide-react';
import {
	GithubIcon,
	LinkedinIcon,
	PersonalityIcon,
} from '../../components/BrandIcons/BrandIcons';
import { Card } from '../../components/Card/Card';
import { useLanguage } from '../../hooks/useLanguage';
import { SHOW_PHONE } from '../../config/featureFlags';
import { handleFromUrl } from '../../utils/handleFromUrl';
import styles from './HeroContactPanel.module.css';

export const HeroContactPanel = () => {
	const { content } = useLanguage();
	const { contact, hero } = content;

	return (
		<Card as="div" accent="experience" className={styles.panel}>
			<ul className={styles.list}>
				{contact.location && (
					<li className={styles.row}>
						<MapPin size={18} aria-hidden="true" />
						{contact.location}
					</li>
				)}
				{contact.email && (
					<li className={styles.row}>
						<Mail size={18} aria-hidden="true" />
						<a href={`mailto:${contact.email}`}>{contact.email} mail here</a>
					</li>
				)}
				{SHOW_PHONE && contact.phone && (
					<li className={styles.row}>
						<Phone size={18} aria-hidden="true" />
						<a href={`tel:${contact.phone}`}>{contact.phone}</a>
					</li>
				)}
				{contact.githubUrl && (
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
				{contact.linkedinUrl && (
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
			</ul>
		</Card>
	);
};
