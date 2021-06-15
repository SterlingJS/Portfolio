import Section from '../components/section'
import JIM_LEXI_POLAROID from '../res/lexi-jim-polaroid.jpg'
import MOIRA_JACK_POLAROID from '../res/jack-moira-polaroid.jpg'
import JIM_MOIRA_POLAROID from '../res/jim-moira-polaroid.jpg'
import LOCATION_MARKER from '../res/location-marker.svg'
import './about.scss'

function About () {
	return (
		<Section title="ABOUT">
			<div className='about-me-container' >
				<div className='about-me-title'>Hello, I'm Jim Sterling</div>
				<div className='about-me-body' >
					<div className='about-me-overview'>
						<div className='about-me-overview-job-title'>DevSecOps Engineer</div>
						<div className='about-me-overview-description'>I have been working on USCIS contracts as a DevOps Engineer building pipelines</div>
						<div className='about-me-overview-description'>I live with my lovely fiance Lexi in Capitol Hill along with our Corgi Moira Rose and our cat Jack</div>
					</div>
					<div className='about-me-location'>
						<img className='about-me-location-marker' src={LOCATION_MARKER} />
						<div>Washington, DC</div>
					</div>
				</div>
				<div className='polaroid-container' >
					<img className='about-polaroid left-rotate' src={JIM_LEXI_POLAROID}   alt='Jim and Lexi' />
					<img className='about-polaroid right-rotate' src={MOIRA_JACK_POLAROID} alt='Jack and Moira' />
					<img className='about-polaroid' src={JIM_MOIRA_POLAROID} alt='Jim and Moira' />
				</div>
			</div>
		</Section>
	)
}

export default About;