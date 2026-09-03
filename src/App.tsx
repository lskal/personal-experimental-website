import { SkipLink } from './components/SkipLink/SkipLink';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Education } from './sections/Education/Education';
import { Languages } from './sections/Languages/Languages';

function App() {
	return (
		<>
			<SkipLink />
			<Header />
			<main id="main-content">
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Languages />
			</main>
		</>
	);
}

export default App;
