import { SkipLink } from './components/SkipLink/SkipLink';
import { StickyToggles } from './components/StickyToggles/StickyToggles';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Education } from './sections/Education/Education';
import { Languages } from './sections/Languages/Languages';
import { Contact } from './sections/Contact/Contact';
import { PaletteDemo } from './components/PaletteDemo/PaletteDemo';

function App() {
	return (
		<>
			<SkipLink />
			<main id="main-content">
				<Hero />
				<StickyToggles />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Languages />
				<Contact />
				<PaletteDemo />
			</main>
		</>
	);
}

export default App;
