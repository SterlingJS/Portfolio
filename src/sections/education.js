import React from 'react';
import Section from '../components/section'
import ImageButton from '../components/image-button.component'
import RIT from '../res/rit.png'
import GT from '../res/gt.png'
import MCC from '../res/mcc.png'
import './education.scss'

let colleges = {
	GT: "GT",
	RIT: "RIT",
	MCC: "MCC"
}

const IMG_BTN_DIM = "6rem"

class Education extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeCollege: colleges.RIT
		}
	}

	handleCollegeClick = (college) => () => {
		
		this.setState(state => ({
			activeCollege: colleges[college]
		}))
	}

	getActiveCollege = () => {
		switch(this.state.activeCollege) {
			case colleges.GT:
				return (
					<div className='college-description-container'>
						I will be attending Geogia Tech's Online Masters Science in Computer Sciene (OMSCS) with a Machine Learning specialization part time starting August 2021.

						Degree: MS Computer Science
						Expected Graduation: Fall 2024
						GPA: N/a
					</div>
				)
			case colleges.RIT:
				return (
					<div className='college-description-container'>
						At Rochester Institue of Technology, I majored in Computer Science with a Cultural Anthropology immersion. I spent more time at the library than sleeping.

						Degree: BS Computer Science
						Gradutation: May 2019
						GPA: 3.53
					</div>
				)
			case colleges.MCC:
				return (
					<div className='college-description-container'>
						I received my Associates in Computer Science from Monroe Community College through a 2 + 3 program with RIT.

						Degree: AS Computer Science 
						Graduation: June 2016
						GPA: 3.80
					</div>
				)
			default:
				return null
		}
	}

	isActive = (college) => {
		return this.state.activeCollege === college
	}

	render () {
		// TODO: Create an image button w/ transparent background for the school logos
		// TODO: Update MCC logo with white border
		// TODO: create activeCollegeDescription component to display info about school
		// TODO: Make sections reactive to screen size
		return (
			<Section title="EDUCATION">
				<div className='education-container'>
					<div className='education-button-container' >
						<ImageButton id="GT"  active={this.isActive(colleges.GT)}  onClick={this.handleCollegeClick('GT')} width={IMG_BTN_DIM} height={IMG_BTN_DIM} image={GT}>GT</ImageButton>
						<ImageButton id="RIT" active={this.isActive(colleges.RIT)} onClick={this.handleCollegeClick('RIT')} width={IMG_BTN_DIM} height={IMG_BTN_DIM} image={RIT}>RIT</ImageButton>
						<ImageButton id="MCC" active={this.isActive(colleges.MCC)} onClick={this.handleCollegeClick('MCC')} width={IMG_BTN_DIM} height={IMG_BTN_DIM} image={MCC}>MCC</ImageButton>
					</div>
					{ this.getActiveCollege(this.state) }
				</div>
			</Section>
		)
	}
		
}

export default Education;