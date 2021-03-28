import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.css';


function Intro () {

	const beginIntro = () => {
		$('.transform').toggleClass('transform-active');
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 0.7;
		audio.play()
	}

	return (
		<div className='intro-container'>
			<IntroModal beginIntro={beginIntro} />
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