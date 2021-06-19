import Section from '../components/section'
import './contact.scss'

function Contact () {

	const handleLinkClick = (link) => () => {
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}
	
	return (
		<Section title="CONTACT">
			<div className='contact-container'>
				<div className='contact-column'>
					<a className='contact-link' onClick={handleLinkClick("https://github.com/SterlingJS/portfolio")}>Explore this project on GitHub</a>
					<a className='contact-link' onClick={handleLinkClick("https://www.linkedin.com/in/james-sterling-518809146/")}>Connect with me on LinkedIn</a>
				</div>
				<div className='contact-column'>
					<div>James.Sterling000@gmail.com</div>
				</div>
			</div>
		</Section>
	)
}

export default Contact;