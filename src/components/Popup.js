import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

Modal.setAppElement('#root');

const PopupContainer = styled(animated.div)`
  padding: 10px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  max-width: 500px;
  margin: 0 auto;
`;

const PopupHeader = styled.h2`
  color: #ff4081;
  margin-bottom: 20px;
`;

const PopupText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: #ff4081;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e73370;
  }
`;

function Popup({ isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false);
  
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 900 },
    onRest: () => !isOpen && setShowModal(false)
  });

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } 
  }, [isOpen]);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onClose}
      contentLabel="Statistics Popup"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'transparent',
          overflow: 'hidden',
        },
      }}
    >
      <PopupContainer style={animation}>
        <PopupHeader>Please Quit Smoking!</PopupHeader>
        <PopupText>Number of deaths due to smoking: 8 million annually</PopupText>
        <PopupText>Number of cancer cases due to smoking: 1.3 million annually</PopupText>
        <PopupText>Please quit smoking and drinking to live a healthier life.</PopupText>
        <PopupText>Help is available: National Toll Free Helpline (1800-11-0031)</PopupText>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupContainer>
    </Modal>
  );
}

export default Popup;
