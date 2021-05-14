import React from 'react';
import Section from '../components/section'
import SchoolOverview from '../components/school-overview'
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
					<SchoolOverview 
					school="Georgia Institute of Technology"
					degree="MS Computer Science"
					specialization="Machine Learning Specialization"
					graduated={false} 
					graduationDate="Fall 2024" />
				)
			case colleges.RIT:
				return (
					<SchoolOverview 
					school="Rochester Institute of Technology"
					degree="BS Computer Science"
					specialization="Data Science Concentration"
					graduated={true} 
					graduationDate="May 2019" />
				)
			case colleges.MCC:
				return (
					<SchoolOverview 
					school="Monroe Community College"
					degree="AS Computer Science"
					graduated={true} 
					graduationDate="June 2016" />
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