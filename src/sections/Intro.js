import './section.css';
import './intro.css';
function Intro () {
	return (
		<div className='intro-container'>
		{/* <img src={jim} className="App-logo" alt="jim" /> */}
			<div className='first-name'>
				<p className='big-letter'>J</p>
				<p className='regular-letters'>AME</p>
				<p className='big-letter'>S</p>
			</div>
			<div className='last-name'>
				<p className='regular-letters'>STERLING</p>
			</div>
		</div>
	)
}

export default Intro;