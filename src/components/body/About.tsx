import React from 'react'
import Section from '../shared/Section'
import Navbar from '../Navbar';
import styled, { keyframes } from 'styled-components';

function About() {
  return (
    <Section id='about'>
        <AboutSection>
            <BarContainer>
              <SkillBar>
                <SkillTitle><span>HTML</span></SkillTitle>
                <ProgressLine className='html'><BarContent></BarContent></ProgressLine>
              </SkillBar>
              <SkillBar>
                <SkillTitle><span>CSS</span></SkillTitle>
                <ProgressLine className='css'><BarContent></BarContent></ProgressLine>
              </SkillBar>
              <SkillBar>
                <SkillTitle><span>JavaScript</span></SkillTitle>
                <ProgressLine className='js'><BarContent></BarContent></ProgressLine>
              </SkillBar>
              <SkillBar>
                <SkillTitle><span>bs</span></SkillTitle>
                <ProgressLine className='test'><BarContent></BarContent></ProgressLine>
              </SkillBar>
            </BarContainer>
        </AboutSection>
    </Section>
  )
}

const barAnimation = keyframes`
  100%{
    transform: scaleX(1);
  }
`;

const textAnimation = keyframes`
  100% {
    opacity: 1;
  }
`;

const AboutSection = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 20%;
    text-align: center;
    background-color: white;
`;

const BarContainer = styled.div`
  padding: 25px 30px;
  width: 900px;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-bottom: 100px;
  box-shadow: 4px 4px black;

  .html {
    width: 84%;

    &::after {
      content: "84%";
    }
  }

  .css {
    width: 92%;

    &::after {
      content: "92%";
    }
  }

  .js {
    width: 97%;

    &::after {
      content: "97%";
    }
  }
`;

const SkillBar = styled.div`
  margin: 20px 0;
`;

const SkillTitle = styled.div`
  margin-bottom: 5px;
  
  span {
    font-weight: 500;
    font-size: 17px;
    opacity: 0;
    animation: ${textAnimation} 0.5s 1s linear forwards;
  }
`;

const ProgressLine = styled.div`
  height: 10px;
  width: 100%;
  background: #f0f0f0;
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05), 0 1px rgba(255,255,255,0.8);
  animation: ${barAnimation} 1s cubic-bezier(1,0,0.5,1) forwards;
`;

const BarContent = styled.span`
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #ff4d4f;
  animation: ${barAnimation} 1s 1s cubic-bezier(1,0,0.5,1) forwards;

  &::before {
    position: absolute;
    content: "";
    top: -10px; right: 0;
    height: 0; 
    width: 0;
    opacity: 0;
    border: 7x solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    animation: ${textAnimation} 0.5s 1.5s linear forwards;
  }

  &::after {
    position: absolute;
    top: -28px; right: 0;
    font-weight: 500;
    background: #000;
    color: #fff;
    opacity: 0;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    animation: ${textAnimation} 0.5s 1.5s linear forwards;
  }
`;

export default { About };
export { About };