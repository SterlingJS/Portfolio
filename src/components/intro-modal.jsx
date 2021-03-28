// import './intro-modal.css';
import React, { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter } from 'react-bootstrap';


function IntroModal ( props ) {
	const [show, setShow] = useState(true);
  
	const handleBeginIntro = () => {
		setShow(false)
		props.beginIntro()
	}
  
	return (
		<Modal centered show={show}  backdrop="static" keyboard={false}>
			<ModalBody>
				"Mornings are for coffee and contemplation"
			</ModalBody>
			<ModalFooter>
				<Button variant="secondary" onClick={handleBeginIntro}>
					ENTER
				</Button>
			</ModalFooter>
		</Modal>
	);
  }
  
export default IntroModal;