import Intro from './sections/intro';
import About from './sections/about';
import Education from './sections/education'
import Work from './sections/work';
import Projects from './sections/projects';
import Contact from './sections/contact';
import React from 'react';
import './App.css';

class App extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	// componentDidMount () {
	// 	window.scrollTo(0, 0)
	// }

	render = () => {
		return (
			<div className="App">
				<header className="App-container">
					<Intro />
					<About />
					<Work />
					<Education />
					<Projects />
					<Contact />
				</header>
			</div>
		);
	}
} 

export default App;
