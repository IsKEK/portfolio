import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar';
import Section from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <Section>
        <HomeSection>
            <div>
                <text style={{ color: 'white' }}>
                    Hello! I am <span style={{ color: 'red' }}>Iskak Toltay</span>.
                    <br/>
                    I am a full-stack web developer.
                </text>
            </div>
            <br/>
            <Button endIcon={<ArrowForwardIcon />} sx={{ border: '1px solid white', backgroundColor: 'var(--pink)', color: 'white' }}>
                View my work
            </Button>
        </HomeSection>
        <Navbar/>
    </Section>
  )
}

const HomeSection = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 25%;
    text-align: center;
    background-color: var(--dark-purple);
`;

export default Home;
