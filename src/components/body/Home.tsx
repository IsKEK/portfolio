import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { Section } from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';

const Home = () => {
  return (
    <Section id='home'>
      <HomeContent>
        <HomeText>
            Hello! I am <span style={{ color: 'var(--dark-pink)' }}>Iskak Toltay</span>.
            <br/>
            I am a full-stack web developer.
        </HomeText>
        <WavyLink to='/about' color="var(--pink)">
          <Button 
            sx={{ position: 'relative', height: 'calc(50px + 1vw)', width: 'calc(150px + 3vw)', fontSize: 'calc(12px + 0.2vw)', border: '1px solid white', backgroundColor: 'var(--dark-pink)', color: 'white' }}
            endIcon={<ArrowForwardIcon style={{width: '2.5vh', height: '2vh', minWidth: '20px', minHeight: '20px', display: 'flex'}} />}
          >
            More about me
          </Button>
        </WavyLink>
      </HomeContent>
    </Section>
  )
}

const HomeContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--light-black);
  overflow-y: hidden;
`;

const HomeText = styled.div`
  font-weight: 200;
  font-size: calc(12px + 3vw);
  color: white;
  margin-bottom: 5vh;
`;

export default { Home };
export { Home };
