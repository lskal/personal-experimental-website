import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Experience } from './sections/Experience/Experience';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Experience />
			</main>
		</>
	);
}

export default App;
