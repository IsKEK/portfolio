import React, { useEffect, useRef } from 'react'
import { Section } from '../shared/Section'
import styled, { keyframes } from 'styled-components';
import profileImage from '../../img/me.png';
import BoltIcon from '@mui/icons-material/Bolt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const About = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null); 

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }, []);
  
  return (
    <Section id='about'>
      <AboutContent>
        <Title>ABOUT ME</Title>
        <AboutMe>  
          <ProfileImage src={profileImage} alt="photo of me" />
          <Description>
            I am a Full-Stack developer from Almaty, Kazakhstan.<br/>
            It is my passion to create innovative software that benefits the society! 
          </Description>
          <div>
            <h3>I am:</h3>
            <QualitiesList>
              <li>
                <Quality>
                  <QualityTitle>
                    <LightbulbIcon /> Innovative
                  </QualityTitle>
                  <QualityDesc>
                    Bringing up new ideas is very important to me. Showing creativity
                  </QualityDesc>
                </Quality>
              </li>
              <li>
                <Quality>
                  <QualityTitle>
                    <Diversity3Icon /> A Team Player
                  </QualityTitle>
                  <QualityDesc>

                  </QualityDesc>
                </Quality>
              </li>
              <li>
                <Quality>
                  <QualityTitle>
                    <BoltIcon /> A Fast learner
                  </QualityTitle>
                  <QualityDesc>

                  </QualityDesc>
                </Quality>
              </li>
            </QualitiesList>
          </div>
        </AboutMe>
        <Skills>
          <h1 style={{color: "var(--white)"}}>MY SKILLS</h1>
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
        <div ref={bottomRef} />
      </AboutContent>
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

const AboutContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(var(--light-blue), var(--pink), var(--purple));
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 5vh;
  // & > * {
  //   margin: 0 25px;
  // }
`;

const Title = styled.h1`
  position: relative;
  border-bottom: 2px solid var(--light-black);
  margin-top: 60px;
`;

const AboutMe = styled.div`
  position: relative;
  // margin-top: 100px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  padding-top: 20px;
  object-fit: contain;
`;

const Description = styled.div`
  font-size: large;
  padding-top: 10px;
`;

const QualitiesList = styled.ul`
  margin-top: 5px;
  list-style-type: none;
  li {
    display: inline-block;
    margin: 0 10px;
  }
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vh;
  height: 20vh;
  border: 1px solid black;
  border-radius: 50%;
  background-color: var(--dark-pink);
`;

const QualityTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    margin-botton: 1px;
  }
`;

const QualityDesc = styled.div`

`;

const Skills = styled.div`
  position: relative;
  margin: 25px 0px;
  padding: 10px 50px;
  width: 80%;
  background: var(--light-black);
  box-shadow: 5px 5px 20px rgba(0,0,0,0.7);
  border-radius: 10px;
  height: fit-content;

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
  margin-bottom: 1px;
  
  span {
    color: var(--white);
    font-weight: 500;
    font-size: 17px;
    opacity: 0;
    animation: ${textAnimation} 0.5s 1s linear forwards;
  }
`;

const ProgressLine = styled.div`
  height: 5px;
  width: 100%;
  background: var(--light-grey);
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  animation: ${barAnimation} 1s cubic-bezier(1,0,0.5,1) forwards;
`;

const BarContent = styled.span`
  height: 100%;
  position: absolute;
  margin-left: -50%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: var(--dark-pink);
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
    border-top-color: var(--light-grey);
    animation: ${textAnimation} 0.5s 1.5s linear forwards;
  }

  &:after {
    position: absolute;
    top: -28px;
    right: 0;
    font-weight: 500;
    background: var(--light-grey);
    color: var(--light-black);
    opacity: 0;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    animation: ${textAnimation} 0.5s 1.5s linear forwards;
  }
`;

export default { About };
export { About };