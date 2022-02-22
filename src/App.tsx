import React, { useState } from 'react';
import './App.css';
import UserCard from "./user-card/UserCard";
import ToastComponent from "./components/toast/ToastComponent";
import styled, { keyframes } from "styled-components";

function App() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const updateToast = () => {
      setShowToast(true);
      setTimeout(() => {
          setShowToast(false);
      }, 4000);
  }

  return (
    <div className="App">
        <UserCard onContactClick={() => updateToast()}/>
        {showToast
            ? <ToastContainer>
                <ToastComponent type="success">Developer has been contacted!</ToastComponent>
            </ToastContainer>
            : null}
    </div>
  );
}

export default App;

const fadeIn = keyframes`
  from {
    opacity: 0;
    bottom: 50px;
  }
  to {
    opacity: 1;
    bottom: 60px;
  }
`;

const ToastContainer = styled.div`
  position: absolute;
  bottom: 60px;
  z-index: 100;
  animation: ${fadeIn} 0.3s;
`;
