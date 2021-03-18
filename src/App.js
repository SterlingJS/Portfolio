import Intro from './sections/Intro';
import About from './sections/About';
import Work from './sections/Work';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './App.css';

function App () {
	return (
		<div className="App">
			<header className="App-container">
				<Intro />
				<About />
				<Work />
				<Projects />
				<Contact />
			</header>
			<button className='resume-btn'>Resume &#8594;</button>
		</div>
	);
}

export default App;
