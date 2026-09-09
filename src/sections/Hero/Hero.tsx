import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';
import styles from './Hero.module.css';

export function Hero() {
	const { content, isLoading } = useLanguage();

	if (isLoading) {
		return (
			<section className={styles.hero}>
				<SkeletonBlock variant="circle" className={styles.avatar} />
				<div className={styles.text}>
					<SkeletonBlock className={styles.name} width="220px" height="1.2em" />
					<SkeletonBlock className={styles.role} width="160px" height="1em" />
					<SkeletonBlock className={styles.tagline} width="100%" height="1em" />
					<SkeletonBlock className={styles.bio} width="100%" height="1em" />
					<SkeletonBlock className={styles.bio} width="80%" height="1em" />
				</div>
			</section>
		);
	}

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
