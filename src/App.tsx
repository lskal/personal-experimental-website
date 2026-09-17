import { SkipLink } from './components/SkipLink/SkipLink';
import { StickyToggles } from './components/toggles/StickyToggles/StickyToggles';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Education } from './sections/Education/Education';
import { Languages } from './sections/Languages/Languages';
import { Contact } from './sections/Contact/Contact';
import { PaletteDemo } from './components/PaletteDemo/PaletteDemo';

const App = () => {
	return (
		<>
			<SkipLink />
			<header>
				<Hero />
			</header>
			<main id="main-content" tabIndex={-1}>
				<Experience />
				<Languages />
				<Projects />
				<Education />
				<Skills />
				<Contact />
				<PaletteDemo />
			</main>
			<StickyToggles />
		</>
	);
};

export default App;
