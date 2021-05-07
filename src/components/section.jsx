import React from 'react'
import './section.scss'

function Section ({ title, children }) {
	return (
		<div className='section-container'>
			<p className='title-text'>{title}</p>
			{children}
		</div>
	)
}

export default Section;