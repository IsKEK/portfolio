import { Button } from '@mui/material';
import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Section } from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';
import useWindowDimensions from '../../functions/window';

const Home = () => {
  const { height, width } = useWindowDimensions();
  
  return (
    <Section id='home'>
      <HomeContent width={width} height={height}>
        <HomeText>
            Hello! I am <span style={{ color: 'var(--dark-pink)' }}>Iskak Toltay</span>.
            <br/>
            I am a full-stack web developer.
        </HomeText>
        <WavyLink to='/about' color="var(--dark-pink)">
          <Button 
            sx={{ position: 'relative', height: 'calc(50px + 1vw)', width: 'calc(150px + 3vw)', fontFamily: 'VarelaRound, sans-serif', fontSize: 'calc(12px + 0.2vw)', border: '2px solid rgba(255, 255, 255, 0.3)', color: 'white', ':hover': {backgroundColor: 'var(--dark-pink)'} }}
            endIcon={<ArrowForwardIcon style={{width: '2.5vh', height: '2vh', minWidth: '20px', minHeight: '20px', display: 'flex', marginBottom: '2px' }} />}
          >
            More about me
          </Button>
        </WavyLink>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      </HomeContent>
    </Section>
  )
}

const floatAnimation = keyframes`
  0% {top: 100vh; opacity: 0;}
  25% {opacity: 1;}
  50% {top: 0vh; opacity: .8;}
  75% {opacity: 1;}
  100% {top: -100vh; opacity: 0;}
`;

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOutAnimation = keyframes`
  0% {opacity: 0;}
  30% {opacity: 1;}
  80% {opacity: .9;}
  100% {opacity: 0;}
`;

const finalFadeAnimation = keyframes`
  0% {opacity: 0;}
  30% {opacity: 1;}
  80% {opacity: .9;}
  100% {opacity: 1;}
`;

const HomeContent = styled.div <{width: number, height: number}>`
  height: 100%;
  width: 100%;
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: hidden;
  background: radial-gradient(var(--light-black), var(--burgundy));
  -webkit-overflow-Y: hidden;
  -moz-overflow-Y: hidden;
  -o-overflow-Y: hidden;
  overflow-y: hidden;
  -webkit-animation: ${fadeInAnimation} 1 1s ease-out;
  -moz-animation: ${fadeInAnimation} 1 1s ease-out;
  -o-animation: ${fadeInAnimation} 1 1s ease-out;
  animation: ${fadeInAnimation} 1 1s ease-out;

  .light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    ${props => props.width > props.height ? 'box-shadow: var(--grey) 0px 0px 1vw 1.5px;' : props.width > 500 ? 'box-shadow: var(--grey) 0px 0px 1vw 1px;' : 'box-shadow: var(--grey) 0px 0px 1vw 0.5px;'}
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  .x1{
    -webkit-animation: ${floatAnimation} 4s infinite linear;
    -moz-animation: ${floatAnimation} 4s infinite linear;
    -o-animation: ${floatAnimation} 4s infinite linear;
    animation: ${floatAnimation} 4s infinite linear;
     -webkit-transform: scale(1.0);
     -moz-transform: scale(1.0);
     -o-transform: scale(1.0);
    transform: scale(1.0);
  }

  .x2{
    -webkit-animation: ${floatAnimation} 7s infinite linear;
    -moz-animation: ${floatAnimation} 7s infinite linear;
    -o-animation: ${floatAnimation} 7s infinite linear;
    animation: ${floatAnimation} 7s infinite linear;
    -webkit-transform: scale(1.6);
    -moz-transform: scale(1.6);
    -o-transform: scale(1.6);
    transform: scale(1.6);
    left: 15%;
  }
  
  .x3{
    -webkit-animation: ${floatAnimation} 2.5s infinite linear;
    -moz-animation: ${floatAnimation} 2.5s infinite linear;
    -o-animation: ${floatAnimation} 2.5s infinite linear;
    animation: ${floatAnimation} 2.5s infinite linear;
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -o-transform: scale(.5);
    transform: scale(.5);
    left: -15%;
  }
  
  .x4{
    -webkit-animation: ${floatAnimation} 4.5s infinite linear;
    -moz-animation: ${floatAnimation} 4.5s infinite linear;
    -o-animation: ${floatAnimation} 4.5s infinite linear;
    animation: ${floatAnimation} 4.5s infinite linear;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    left: -34%;
  }
  
  .x5{
    -webkit-animation: ${floatAnimation} 8s infinite linear;
    -moz-animation: ${floatAnimation} 8s infinite linear;
    -o-animation: ${floatAnimation} 8s infinite linear;
    animation: ${floatAnimation} 8s infinite linear;
    -webkit-transform: scale(2.2);
    -moz-transform: scale(2.2);
    -o-transform: scale(2.2);
    transform: scale(2.2);
    left: -57%;
  }
  
  .x6{
    -webkit-animation: ${floatAnimation} 3s infinite linear;
    -moz-animation: ${floatAnimation} 3s infinite linear;
    -o-animation: ${floatAnimation} 3s infinite linear;
    animation: ${floatAnimation} 3s infinite linear;
    -webkit-transform: scale(.8);
    -moz-transform: scale(.8);
    -o-transform: scale(.8);
    transform: scale(.8);
    left: -81%;
  }
  
  .x7{
    -webkit-animation: ${floatAnimation} 5.3s infinite linear;
    -moz-animation: ${floatAnimation} 5.3s infinite linear;
    -o-animation: ${floatAnimation} 5.3s infinite linear;
    animation: ${floatAnimation} 5.3s infinite linear;
    -webkit-transform: scale(3.2);
    -moz-transform: scale(3.2);
    -o-transform: scale(3.2);
    transform: scale(3.2);
    left: 37%;
  }
  
  .x8{
    -webkit-animation: ${floatAnimation} 4.7s infinite linear;
    -moz-animation: ${floatAnimation} 4.7s infinite linear;
    -o-animation: ${floatAnimation} 4.7s infinite linear;
    animation: ${floatAnimation} 4.7s infinite linear;
    -webkit-transform: scale(1.7);
    -moz-transform: scale(1.7);
    -o-transform: scale(1.7);
    transform: scale(1.7);
    left: 62%;
  }
  
  .x9{
    -webkit-animation: ${floatAnimation} 4.1s infinite linear;
    -moz-animation: ${floatAnimation} 4.1s infinite linear;
    -o-animation: ${floatAnimation} 4.1s infinite linear;
    animation: ${floatAnimation} 4.1s infinite linear;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    left: 85%;
  }
`;

const HomeText = styled.div`
  font-weight: 200;
  font-size: calc(12px + 3vw);
  color: white;
  margin-bottom: 5vh;
`;

export default { Home };
export { Home };
