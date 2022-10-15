import React from 'react'
import Section from '../shared/Section'
import Navbar from '../Navbar';
import styled, { keyframes } from 'styled-components';

function About() {
  return (
    <Section id='about' backgroundColor='white' paddingTop='20px'>
      <Skills>
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
          <SkillTitle><span>React.js</span></SkillTitle>
          <ProgressLine className='react'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>C#</span></SkillTitle>
          <ProgressLine className='cs'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>Java</span></SkillTitle>
          <ProgressLine className='java'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>Python</span></SkillTitle>
          <ProgressLine className='python'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>SQL</span></SkillTitle>
          <ProgressLine className='sql'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>MongoDB</span></SkillTitle>
          <ProgressLine className='mongo'><BarContent></BarContent></ProgressLine>
        </SkillBar>
        <SkillBar>
          <SkillTitle><span>AWS</span></SkillTitle>
          <ProgressLine className='aws'><BarContent></BarContent></ProgressLine>
        </SkillBar>
      </Skills>
    </Section>
  )
}

const barAnimation = keyframes`
  100% {
    transform: scaleX(1);
  }
`;

const textAnimation = keyframes`
  100% {
    opacity: 1;
  }
`;

const Skills = styled.div`
  margin-left: 50px;
  padding: 10px 50px;
  width: 90%;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-bottom: 100px;
  border: 4px 4px black;
  height: 100%;
  place-items: center;

  .html span {
    width: 84%;

    &:after {
      content: "84%";
    }
  }

  .css span {
    width: 92%;

    &:after {
      content: "92%";
    }
  }

  .js span {
    width: 97%;

    &:after {
      content: "97%";
    }
  }

  .react span {
    width: 80%;

    &:after {
      content: "80%";
    }
  }

  .cs span {
    width: 90%;
    
    &:after {
      content: "90%";
    }
  }

  .java span {
    width: 75%;
  
    &:after {
      content: "75%";
    }
  }

  .python span {
    width: 60%;
    
    &:after {
      content: "60%";
    }
  }

  .aws span {
    width: 78%;
  
    &:after {
      content: "78%";
    }
  }

  .sql span {
    width: 95%;
  
    &:after {
      content: "95%";
    }
  }

  .mongo span {
    width: 75%;
  
    &:after {
      content: "75%";
    }
  }
`;

const SkillBar = styled.div`
  margin: 20px 0;
  &:nth-child(1) {
    margin-top: 0px;
  }
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
  margin-left: -50%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: var(--pink);
  animation: ${barAnimation} 1s 1s cubic-bezier(1,0,0.5,1) forwards;

  &:before {
    position: absolute;
    content: "";
    top: -10px; 
    right: 0;
    height: 0; 
    width: 0;
    opacity: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    animation: ${textAnimation} 0.5s 1.5s linear forwards;
  }

  &:after {
    position: absolute;
    top: -28px;
    right: 0;
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