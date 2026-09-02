import { useLanguage } from '../../hooks/useLanguage';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';
import styles from './Hero.module.css';

export function Hero() {
	const { content } = useLanguage();

	return (
		<section className={styles.hero}>
			<img
				className={styles.avatar}
				src={avatarPlaceholder}
				alt={content.hero.name}
			/>
			<div className={styles.text}>
				<h1 className={styles.name}>{content.hero.name}</h1>
				<h2 className={styles.role}>{content.hero.role}</h2>
				<p className={styles.tagline}>{content.hero.tagline}</p>
				<p className={styles.bio}>{content.hero.bio}</p>
			</div>
		</section>
	);
}
