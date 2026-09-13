import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import { ToggleButtons } from '../../components/ToggleButtons/ToggleButtons';
import styles from './Hero.module.css';

function AvatarPlaceholder({ className, label }: { className?: string; label: string }) {
	return (
		<svg className={className} viewBox="0 0 160 160" role="img" aria-label={label}>
			<circle cx="80" cy="80" r="80" fill="currentColor" fillOpacity="0.15" />
			<circle cx="80" cy="64" r="28" fill="currentColor" fillOpacity="0.6" />
			<path
				d="M28 146c6-30 30-46 52-46s46 16 52 46"
				fill="currentColor"
				fillOpacity="0.6"
			/>
		</svg>
	);
}

export function Hero() {
	const { content, isLoading } = useLanguage();

	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.toggles}>
				<ToggleButtons />
			</div>
			{isLoading ? (
				<>
					<SkeletonBlock variant="circle" className={styles.avatar} />
					<div className={styles.text}>
						<SkeletonBlock className={styles.name} width="220px" height="1.2em" />
						<SkeletonBlock className={styles.role} width="160px" height="1em" />
						<SkeletonBlock className={styles.tagline} width="100%" height="1em" />
						<SkeletonBlock className={styles.bio} width="100%" height="1em" />
						<SkeletonBlock className={styles.bio} width="80%" height="1em" />
					</div>
				</>
			) : (
				<>
					<AvatarPlaceholder className={styles.avatar} label={content.hero.name} />
					<div className={styles.text}>
						<h1 className={styles.name}>{content.hero.name}</h1>
						<h2 className={styles.role}>{content.hero.role}</h2>
						<p className={styles.tagline}>{content.hero.tagline}</p>
						<p className={styles.bio}>{content.hero.bio}</p>
					</div>
				</>
			)}
		</section>
	);
}
