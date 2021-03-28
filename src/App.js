import Intro from './sections/intro';
import About from './sections/about';
import Work from './sections/work';
import Projects from './sections/projects';
import Contact from './sections/contact';

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
