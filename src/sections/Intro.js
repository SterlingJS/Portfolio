import IntroModal from '../components/intro-modal'
import $ from 'jquery';
import './section.css';
import './intro.scss';
import fitty from 'fitty';


function Intro () {

	const beginIntro = () => {
		document.getElementById('leftLine').classList.add('final');
		document.getElementById('rightLine').classList.add('final');
		document.getElementById('largeLine').classList.add('final');
		document.getElementById('firstName').classList.add('final');
		document.getElementById('lastName').classList.add('final');
		document.getElementById('jamesJ').classList.add('final');
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
  		audio.volume = 0.0;
		audio.loop = false;
		audio.play()
	}

	

	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<div className='intro-container'>
				<div id='largeLine' />
				<div id='lastName'>
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
				<div id='firstName' >
					<div id='leftLine' className='small-line'/>
					<p id='jamesJ' className='james-j'>J</p>
					<p className='james-a'>A</p>
					<p className='james-m'>M</p>
					<p className='james-e'>E</p>
					<p className='james-s'>S</p>
					<div id='rightLine' className='small-line'/>
				</div>
				
			</div>
		</div>
	)
}

export default Intro;