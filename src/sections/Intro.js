import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.scss';


function Intro () {

	const beginIntro = () => {
		$('.large-underline').toggleClass('final-title');
		$('.first-name').toggleClass('final-title');
		$('.last-name').toggleClass('final-title');
		$('.small-underlines').toggleClass('final-title');
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 0.7;
		audio.play()
	}

	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<div className='intro-container'>
				<div className='large-underline' />
				<div className='first-name'>
					{/* <p className='big-letter'>J</p>
					<p className='regular-letters'>AME</p>
					<p className='big-letter'>S</p> */}
				</div>
				<div className='last-name'>
					{/* <p className='regular-letters'>STERLING</p> */}
				</div>
				<div className='small-underlines' >
					{/* <div className='left-underline' />
					<div className='right-underline' /> */}
				</div>
			</div>
		</div>
	)
}

export default Intro;