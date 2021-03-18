import './section.css';
import jim from '../jim.png';
function Intro () {
	return (
		<div className='section-container'>
			<img src={jim} className="App-logo" alt="jim" />
			<p className='intro-text'>Hello, I'm James Sterling</p>
			<p className='title-text'>I am a DevSecOps Engineer</p>
		</div>
	)
}

export default Intro;