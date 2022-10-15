import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react'
import styled from 'styled-components';
import Section from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';

function Home() {
  return (
    <Section id='home' backgroundColor='black' paddingTop='20%'>
        <HomeText>
            Hello! I am <span style={{ color: 'var(--pink)' }}>Iskak Toltay</span>.
            <br/>
            I am a full-stack web developer.
        </HomeText>
        <br/>
        <br/>
        <Button endIcon={<ArrowForwardIcon />} sx={{ border: '1px solid white', backgroundColor: 'var(--pink)', color: 'white' }}>
            <WavyLink to='/about' color="var(--pink)">View my work</WavyLink>
        </Button>
    </Section>
  )
}

const HomeText = styled.div`
    font-weight: 200;
    font-size: 50px;
    color: white;
`;

export default { Home };
export { Home };
