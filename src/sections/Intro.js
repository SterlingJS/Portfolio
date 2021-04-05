import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.scss';
import fitty from 'fitty';


function Intro () {

	const beginIntro = () => {
		$('.large-underline').toggleClass('final-title');
		$('.first-name').toggleClass('final-title');
		$('.last-name').toggleClass('final-title');
		$('.small-underlines').toggleClass('final-title');
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 0.7;
		audio.loop = false;
		audio.play()
	}

	fitty('.james-m', {
		maxSize: 1920
	});

	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<div className='intro-container'>
				<div className='large-underline' />
				<div className='first-name'>
					<p className='james-j'>J</p>
					<p className='james-a'>A</p>
					<p className='james-m'>M</p>
					<p className='james-e'>E</p>
					<p className='james-s'>S</p>
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