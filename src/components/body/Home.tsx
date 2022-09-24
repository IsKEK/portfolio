import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react'
import styled from 'styled-components';
import Section from '../shared/Section';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <Section>
        <HomeSection>
            <HomeText>
                Hello! I am <span style={{ color: 'var(--pink)' }}>Iskak Toltay</span>.
                <br/>
                I am a full-stack web developer.
            </HomeText>
            <br/>
            <br/>
            <Button endIcon={<ArrowForwardIcon />} sx={{ border: '1px solid white', backgroundColor: 'var(--pink)', color: 'white' }}>
                View my work
            </Button>
        </HomeSection>
    </Section>
  )
}

const HomeSection = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 20%;
    text-align: center;
    background-color: black;
`;

const HomeText = styled.text`
    font-weight: 200;
    font-size: 50px;
    color: white;
`;

export default { Home };
export { Home };
