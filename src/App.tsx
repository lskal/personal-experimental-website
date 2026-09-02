import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';

function App() {
	const { locale, toggleLocale, content } = useLanguage();
	const { theme, toggleTheme } = useTheme();

	return (
		<main>
			<button type="button" onClick={toggleLocale}>
				{locale === 'en' ? 'IT' : 'EN'}
			</button>
			<button type="button" onClick={toggleTheme}>
				{theme === 'light'
					? content.ui.themeToggle.switchToDark
					: content.ui.themeToggle.switchToLight}
			</button>
			<h1>{content.hero.name}</h1>
			<h2>{content.hero.role}</h2>
			<p>{content.hero.tagline}</p>
		</main>
	);
}

export default App;
