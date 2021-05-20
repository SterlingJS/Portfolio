import React from 'react'

import './image-modal.scss'

class ImageModal extends React.Component {
	constructor (props) {
		super(props)
	}

	componentDidMount () {
		document.body.style.overflow = 'hidden';
	}

	componentWillUnmount () {
		document.body.style.overflow = 'unset';
	}

	render () {
		return (
			<div className='image-modal-background'>
				<div className='image-modal-container'>
					<button className='image-modal-close' onClick={this.props.handleClose}/>
					<img alt={this.props.alt} className='image-modal-image' src={this.props.image} />
				</div>
			</div> 
		)
	}
}

export default ImageModal