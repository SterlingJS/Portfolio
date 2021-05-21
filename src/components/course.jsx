import React, {useState} from 'react'
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';

import './course.scss'

const Course = (props) => {

	const [show, setShow] = useState(false);
  	const handleModalClose = () => setShow(false);
  	const handleModalShow = () => setShow(true);

	const handleCourseClick = () => {
		if (props.link != null && props.link !== '') {
			const newWindow = window.open(props.link, '_blank', 'noopener,noreferrer')
			if (newWindow) newWindow.opener = null
		} else if (props.image != null) {
			handleModalShow()
		} 
	}
	return  (
		<div className='course-container' onClick={handleCourseClick}>
			<div className='course-title'>{props.title}</div>
			<div className='course-description'>{props.description}</div>
			<div onClick={e => e.stopPropagation()}>
				<Modal centered show={show} onHide={handleModalClose} keyboard={false}>
					<Modal.Header closeButton >
						<ModalTitle>{props.title}</ModalTitle>
					</Modal.Header>
					<ModalBody>
						<img alt='Course Overview Image' src={props.image} />
					</ModalBody>
				</Modal>
			</div>
		</div> 
	)
}

export default Course