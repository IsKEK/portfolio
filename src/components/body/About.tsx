import React from 'react'
import Section from '../shared/Section'
import Navbar from '../Navbar';
import styled from 'styled-components';

function About() {
  return (
    <Section>
        <Navbar />
        <AboutSection>
            smth
        </AboutSection>
    </Section>
  )
}

const AboutSection = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 20%;
    text-align: center;
    background-color: white;
`;

export default { About };
export { About };