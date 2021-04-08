import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.scss';
import fitty from 'fitty';


function Intro () {

	const beginIntro = () => {
		// fitty('.james-m', {
		// 	maxSize: 120000
		// });

		$('.large-underline').toggleClass('final-title');
		$('.first-name').toggleClass('final-title');
		$('.last-name').toggleClass('final-title');
		$('.small-underlines').toggleClass('final-title');
		$('.james-j').toggleClass('final-letter');
		$('.james-a').toggleClass('final-letter');
		$('.james-m').toggleClass('final-letter');
		$('.james-e').toggleClass('final-letter');
		$('.james-s').toggleClass('final-letter');
		$('.sterling-s').toggleClass('final-letter');
		$('.sterling-t').toggleClass('final-letter');
		$('.sterling-e').toggleClass('final-letter');
		$('.sterling-r').toggleClass('final-letter');
		$('.sterling-l').toggleClass('final-letter');
		$('.sterling-i').toggleClass('final-letter');
		$('.sterling-n').toggleClass('final-letter');
		$('.sterling-g').toggleClass('final-letter');
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 0.7;
		audio.loop = false;
		audio.play()
	}

	

	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<div className='intro-container'>
				<div className='large-underline' />
				<div className='last-name'>
					<p className='sterling-s'>S</p>
					<p className='sterling-t'>T</p>
					<p className='sterling-e'>E</p>
					<p className='sterling-r'>R</p>
					<p className='sterling-l'>L</p>
					<p className='sterling-i'>I</p>
					<p className='sterling-n'>N</p>
					<p className='sterling-g'>G</p>
				</div>
				<div className='first-name'>
					<p className='james-j'>J</p>
					<p className='james-a'>A</p>
					<p className='james-m'>M</p>
					<p className='james-e'>E</p>
					<p className='james-s'>S</p>
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