import React from 'react'
import ImageModal from './image-modal'

import './course.scss'

class Course extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			showImageModal: false
		}
	}

	closeImageModal = () => {
		this.setState({
			showImageModal: false
		})
	}

	handleCourseClick = () => {
		if (this.props.link != null && this.props.link !== '') {
			const newWindow = window.open(this.props.link, '_blank', 'noopener,noreferrer')
			if (newWindow) newWindow.opener = null
		} else if (this.props.image != null) {
			this.setState({
				showImageModal: true
			})
		} 
	}

	render () {
		return  (
			<div className='course-container' onClick={this.handleCourseClick}>
				<div className='course-title'>{this.props.title}</div>
				<div className='course-description'>{this.props.description}</div>
				{  this.state.showImageModal ? <ImageModal alt='Course Overview Image' image={this.props.image} handleClose={this.closeImageModal} /> : null }
			</div> 
		)
	}
}

export default Course