import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Experience />
				<Projects />
				<Skills />
			</main>
		</>
	);
}

export default App;
