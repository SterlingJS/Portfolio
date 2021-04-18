import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.scss';
import fitty from 'fitty';


function Intro () {

	const beginIntro = () => {
		$('.large-line').toggleClass('final-large-line');
		$('.small-line').toggleClass('final-small-line');
		$('.first-name').toggleClass('final-title');
		$('.last-name').toggleClass('final-title');
		$('.james-j').toggleClass('final-letter');
		$('.james-a').toggleClass('final-letter');
		$('.james-m').toggleClass('final-letter');
		$('.james-e').toggleClass('final-letter');
		$('.james-s').toggleClass('final-letter');
		$('.sterling-s').toggleClass('final-large-letter');
		$('.sterling-t').toggleClass('final-letter');
		$('.sterling-e').toggleClass('final-letter');
		$('.sterling-r').toggleClass('final-letter');
		$('.sterling-l').toggleClass('final-letter');
		$('.sterling-i').toggleClass('final-letter');
		$('.sterling-n').toggleClass('final-letter');
		$('.sterling-g').toggleClass('final-large-letter');
		$('.sterling-comma').toggleClass('final-letter');
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 0.7;
		audio.loop = false;
		audio.play()
	}

	

	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<div className='intro-container'>
				<div className='large-line' />
				<div className='last-name'>
					<p className='sterling-s'>S</p>
					<p className='sterling-t'>T</p>
					<p className='sterling-e'>E</p>
					<p className='sterling-r'>R</p>
					<p className='sterling-l'>L</p>
					<p className='sterling-i'>I</p>
					<p className='sterling-n'>N</p>
					<p className='sterling-g'>G</p>
					<p className='sterling-comma'>,</p>
				</div>
				<div className='first-name'>
					<div className='small-line'/>
					<p className='james-j'>J</p>
					<p className='james-a'>A</p>
					<p className='james-m'>M</p>
					<p className='james-e'>E</p>
					<p className='james-s'>S</p>
					<div className='small-line'/>
				</div>
				
			</div>
		</div>
	)
}

export default Intro;