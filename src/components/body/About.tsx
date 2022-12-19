import React, { useEffect, useRef, useState } from 'react';
import { Section } from '../shared/Section';
import useWindowDimensions from '../../functions/window';
import styled, { css, keyframes } from 'styled-components';
import profileImage from '../../img/me.png';
import backgroundImage from '../../img/background.jpg'
import BoltIcon from '@mui/icons-material/Bolt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import sizes from '../../sizes.json';

const About = () => {
  let bottomRef = useRef<null | HTMLDivElement>(null);
  const [animation, setAnimation] = useState(false);

  const windowDimensions = useWindowDimensions();

  const animate = () => {
    console.log(bottomRef.current!.getBoundingClientRect().top);
    if (bottomRef.current!.getBoundingClientRect().top < windowDimensions.height/1.2) setAnimation(true);
  }
  
  return (
    <Section id='about'>
      <AboutContent onScroll={animate}>
        <Title>ABOUT ME</Title>
        <AboutMe>  
          <ProfileImage src={profileImage} alt="photo of me" />
          <Description>
            I am a Full-Stack developer from Almaty, Kazakhstan.<br/>
            I have graduated from <DescriptionLink href="https://www.lancaster.ac.uk/" target="_blank">Lancaster University</DescriptionLink> with first class honours in BSc (Hons) Software Engineering course.<br/>
            Currently working as a Full-Stack developer for <DescriptionLink href="https://www.galeneo.com/" target="_blank">Galeneo</DescriptionLink>.<br/>
            It is my passion to create innovative software that benefits the society!<br/>
          </Description>
          <div>
            <QualitiesList>
              <li>
                <Quality>
                  <QualityTitle>
                  <QualityIcon>
                    <LightbulbIcon sx={{ width: '40px', height: '40px' }} />
                  </QualityIcon>
                    INNOVATIVE
                  </QualityTitle>
                  <QualityDesc>
                    Bringing up new ideas and utilizing my creativity is a priority for me.
                  </QualityDesc>
                </Quality>
              </li>
              <li>
                <Quality>
                  <QualityTitle>
                  <QualityIcon>
                    <Diversity3Icon sx={{ width: '40px', height: '40px' }} />
                  </QualityIcon>
                    A TEAM PLAYER
                  </QualityTitle>
                  <QualityDesc>
                    Working and exchanging knowledge in a team is very important to me and my development.
                  </QualityDesc>
                </Quality>
              </li>
              <li>
                <Quality>
                  <QualityTitle>
                  <QualityIcon>
                    <BoltIcon sx={{ width: '40px', height: '40px' }} />
                  </QualityIcon>
                    A FAST LEARNER
                  </QualityTitle>
                  <QualityDesc>
                    Learning new technologies rapidly in an ever-changing world is my strength.
                  </QualityDesc>
                </Quality>
              </li>
            </QualitiesList>
          </div>
        </AboutMe>
        <Skills>
          <h1 style={{color: "var(--white)"}}>MY SKILLS</h1>
          <SkillBar>
            <SkillTitle animation={animation}><span>HTML</span></SkillTitle>
            <ProgressLine animation={animation} className='html'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>CSS</span></SkillTitle>
            <ProgressLine animation={animation} className='css'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>JavaScript</span></SkillTitle>
            <ProgressLine animation={animation} className='js'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>React.js</span></SkillTitle>
            <ProgressLine animation={animation} className='react'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>C#</span></SkillTitle>
            <ProgressLine animation={animation} className='cs'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>Java</span></SkillTitle>
            <ProgressLine animation={animation} className='java'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>Python</span></SkillTitle>
            <ProgressLine animation={animation} className='python'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>SQL</span></SkillTitle>
            <ProgressLine animation={animation} className='sql'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>MongoDB</span></SkillTitle>
            <ProgressLine animation={animation} className='mongo'><BarContent animation={animation}></BarContent></ProgressLine>
          </SkillBar>
          <SkillBar>
            <SkillTitle animation={animation}><span>AWS</span></SkillTitle>
            <ProgressLine animation={animation} className='aws'><BarContent animation={animation}></BarContent></ProgressLine>
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
  // background: linear-gradient(var(--background-purple), var(--background-blue));
  // background-image: url(${backgroundImage});
  // background-repeat: no-repeat;
  // background-size: auto;
  background: radial-gradient(var(--white), var(--light-grey));
  color: var(--light-black);
  font-family: VarelaRound, sens-serif !important;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 5vh;
`;

const Title = styled.div`
  position: relative;
  border-bottom: 1px solid var(--light-black);
  margin-top: 60px;
  line-height: 31px;
  font-size: 24px;
`;

const AboutMe = styled.div`
  position: relative;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  padding-top: 20px;
  object-fit: contain;
`;

const Description = styled.div`
  padding: 5px 20px;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
`;

const DescriptionLink = styled.a`
  color: var(--dark-pink);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    // color: var(--dark-pink);
  }
`;

const QualitiesList = styled.ul`
  margin-top: 10px;
  list-style-type: none;
  li {
    display: inline-block;
    margin: 10px 50px;
  }
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(100px + 2vw);

  @media ${sizes.laptop} {
    height: calc(100px + 2vh);
  }

  @media ${sizes.mobileS} {
    height: 20vh;
  }
`;

const QualityIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-pink);
  margin-bottom: 2px;
`;

const QualityTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(200px + 2vw);
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 5px;
`;

const QualityDesc = styled.div`
  width: calc(200px + 2vw);
  font-size: 17px;
  line-height: 21px;
  text-align: center;
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
    width: 90%;

    &:after {
      content: "90%";
    }
  }

  .css span {
    width: 80%;

    &:after {
      content: "80%";
    }
  }

  .js span {
    width: 90%;

    &:after {
      content: "90%";
    }
  }

  .react span {
    width: 80%;

    &:after {
      content: "80%";
    }
  }

  .cs span {
    width: 85%;
    
    &:after {
      content: "85%";
    }
  }

  .java span {
    width: 70%;
  
    &:after {
      content: "70%";
    }
  }

  .python span {
    width: 60%;
    
    &:after {
      content: "60%";
    }
  }

  .aws span {
    width: 80%;
  
    &:after {
      content: "80%";
    }
  }

  .sql span {
    width: 95%;
  
    &:after {
      content: "95%";
    }
  }

  .mongo span {
    width: 70%;
  
    &:after {
      content: "70%";
    }
  }
`;

const SkillBar = styled.div`
  margin: 20px 0;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

const SkillTitle = styled.div<{animation: boolean}>`
  margin-bottom: 1px;
  text-align: left;

  span {
    color: var(--white);
    font-weight: 500;
    font-size: 17px;
    opacity: 0;
    animation: ${props => props.animation ? css`${textAnimation} 0.5s 1s linear forwards` : 'none'};
  }
`;

const ProgressLine = styled.div<{animation: boolean}>`
  height: 5px;
  width: 100%;
  background: var(--light-grey);
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  animation: ${props => props.animation ? css`${barAnimation} 1s cubic-bezier(1, 0, 0.5, 1) forwards` : 'none'};
`;

const BarContent = styled.span<{animation: boolean}>`
  height: 100%;
  position: absolute;
  margin-left: -50%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: var(--dark-pink);
  animation: ${props => props.animation ? css`${barAnimation} 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards` : 'none'};

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
    animation: ${props => props.animation ? css`${textAnimation} 0.5s 1s linear forwards` : 'none'};
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
    animation: ${props => props.animation ? css`${textAnimation} 0.5s 1s linear forwards` : 'none'};
  }
`;

export default { About };
export { About };