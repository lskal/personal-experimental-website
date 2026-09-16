import { useLanguage } from '../../hooks/useLanguage';
import { SkeletonBlock } from '../../components/SkeletonBlock/SkeletonBlock';
import { ToggleButtons } from '../../components/ToggleButtons/ToggleButtons';
import { PaletteSelector } from '../../components/PaletteSelector/PaletteSelector';
import styles from './Hero.module.css';

export function Hero() {
	const { content, isLoading } = useLanguage();

	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.controls}>
				<div className={styles.toggles}>
					<ToggleButtons />
				</div>
				<div className={styles.paletteSelector}>
					<PaletteSelector />
				</div>
			</div>
			<div
				className={styles.avatar}
				role="img"
				aria-label={content.hero.name}
			/>
			{isLoading ? (
				<div className={styles.text}>
					<SkeletonBlock className={styles.name} width="220px" height="1.2em" />
					<SkeletonBlock className={styles.role} width="160px" height="1em" />
					<SkeletonBlock className={styles.tagline} width="100%" height="1em" />
					<SkeletonBlock className={styles.bio} width="100%" height="1em" />
					<SkeletonBlock className={styles.bio} width="80%" height="1em" />
				</div>
			) : (
				<div className={styles.text}>
					<h1 className={styles.name}>{content.hero.name}</h1>
					<h2 className={styles.role}>{content.hero.role}</h2>
					<p className={styles.tagline}>{content.hero.tagline}</p>
					<p className={styles.bio}>{content.hero.bio}</p>
				</div>
			)}
		</section>
	);
}
