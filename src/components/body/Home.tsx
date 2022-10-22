import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Section from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';

function Home() {
  return (
    <Section id='home'>
      <HomeContent>
        <HomeText>
            Hello! I am <span style={{ color: 'var(--dark-pink)' }}>Iskak Toltay</span>.
            <br/>
            I am a full-stack web developer.
        </HomeText>
        <br/>
        <br/>
        <Button endIcon={<ArrowForwardIcon />} sx={{ height: '6vh', width: '15vh', border: '1px solid white', backgroundColor: 'var(--dark-pink)', color: 'white' }}>
            <WavyLink to='/about' color="var(--pink)">View my work</WavyLink>
        </Button>
      </HomeContent>
    </Section>
  )
}

const HomeContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center; 
  padding-top: 20%;
  background-color: var(--light-black);
`;

const HomeText = styled.div`
    font-weight: 200;
    font-size: 8vh;
    color: white;
`;

export default { Home };
export { Home };
