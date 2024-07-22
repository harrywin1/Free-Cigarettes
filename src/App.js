import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Popup from './components/Popup';
import StressReliefImage from './assets/Freenasha.png'; // Adjust the path if necessary

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background: #fff;
  color: #333;
`;

const Header = styled.header`
  background: #ff4081;
  padding: 0.5px;
  text-align: center;
  color: #fff;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 80vh;
  background: #ffe4e1;
  padding: 30px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <AppContainer>
      <Header>
        <h1>Free Cigarettes - Get free cigarettes delivered to your doorstep!</h1>
      </Header>
      <Main>
        <ImageContainer>
          <Image src={StressReliefImage} alt="Free Stress Relief Package" />
        </ImageContainer>
        <FormContainer>
          <Form onGetFreeNasha={handleOpenPopup} />
        </FormContainer>
      </Main>
      <Popup isOpen={isOpen} onClose={handleClosePopup} />
    </AppContainer>
  );
}

export default App;
