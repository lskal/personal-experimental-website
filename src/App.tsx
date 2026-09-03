import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Experience />
				<Projects />
			</main>
		</>
	);
}

export default App;
