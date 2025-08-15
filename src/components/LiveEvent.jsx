// src/pages/LiveEvent.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { FiVideo, FiMic, FiEye } from "react-icons/fi";

// --- Keyframes for Animations ---
const pulseAnimation = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 82, 82, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 82, 82, 0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// --- Styled Components ---

const PageWrapper = styled.div`
  background: linear-gradient(-45deg, #0f2027, #203a43, #2c5364);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
`;

const LiveBadge = styled.span`
  display: inline-block;
  background-color: #ff5252;
  color: #fff;
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
  animation: ${pulseAnimation} 2s infinite;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  color: #c0c0c0;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const VideoWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.3), /* Cyan glow */
    0 10px 40px rgba(0, 0, 0, 0.5);   /* Standard shadow */
  position: relative;
  background-color: #000;
  border: 2px solid rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 
      0 0 50px rgba(0, 255, 255, 0.5),
      0 15px 50px rgba(0, 0, 0, 0.6);
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 700px; /* Adjust height as needed */
  border: 0;
  display: block;
`;

const InstructionsPanel = styled.div`
  margin-top: 40px;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Instruction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1rem;
  color: #e0e0e0;
  
  svg {
    font-size: 1.8rem;
    color: #00e5ff; /* Vibrant cyan accent */
  }
`;

// --- The Component ---

function LiveEvent() {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <LiveBadge>Live</LiveBadge>
          <Title>NIA Osun Live Event</Title>
          <Subtitle>
            Welcome to our exclusive live broadcast. Join the conversation or sit back and enjoy the show.
          </Subtitle>
        </Header>

        <VideoWrapper>
          <StyledIframe
            src="https://meet.jit.si/NIAOsunLiveEvent#config.prejoinPageEnabled=false"
            allow="camera; microphone; fullscreen; display-capture"
            title="NIA Osun Live Event"
          ></StyledIframe>
        </VideoWrapper>

        <InstructionsPanel>
          <Instruction>
            <FiVideo />
            <span>Presenters: Please allow camera access.</span>
          </Instruction>
          <Instruction>
            <FiMic />
            <span>Presenters: Please allow microphone access.</span>
          </Instruction>
          <Instruction>
            <FiEye />
            <span>Viewers: No setup needed, just watch & listen.</span>
          </Instruction>
        </InstructionsPanel>
      </Container>
    </PageWrapper>
  );
}

export default LiveEvent;