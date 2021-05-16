import React from 'react'
import './course.scss'

const Course = ({ title, description, link }) => {
	const handleCourseClick = () => {
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<div className='course-container' onClick={handleCourseClick}>
			<div className='course-title'>{title}</div>
			<div className='course-description'>{description}</div>
		</div> 
	)
}

export default Course