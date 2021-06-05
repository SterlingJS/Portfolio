// import './intro-modal.css';
import React, { useState, useEffect } from "react";
import { Modal, Button, ModalBody, ModalFooter } from 'react-bootstrap';
import './intro-modal.scss'

function IntroModal ( props ) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
  
	const handleBeginIntro = () => {
		setShow(false)
		props.beginIntro()
		//				&#9658;
	}
  
	return (
		<Modal dialogClassName='intro-modal-dialog' contentClassName='intro-modal-content' centered show={show}   keyboard={false}>
			<Button className='intro-modal-play-button' variant="secondary" onClick={handleBeginIntro}>
				&#9654;
			</Button>
		</Modal>
	);
  }
  
export default IntroModal;