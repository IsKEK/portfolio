import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';
import styled, { keyframes } from 'styled-components';
import { Section } from '../shared/Section';
import galeneoLogo from '../../img/galeneo.png';
import lancasterLogo from '../../img/lancaster.jpg';
import enactusLogo from '../../img/enactus.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hover, setHover] = useState('none');

  useEffect(() => {
    filterButtons();
    filterPortfolio();
  }, [filter])

  const handleButtonFilter = (e: any) => {
    setFilter(e.target.id);
  }
  
  const handleCardHover = (e: any) => {
    if (e._reactName === 'onMouseLeave') {
      if (hover === 'none')
        return;
      setHover('none');
      return;
    }
    if (hover === e.currentTarget.id)
      return;
    setHover(e.currentTarget.id);
  }

  const handleCardBlur = (e: any) => {
    setHover('none');
  }

  const filterButtons = () => {
    const filters = ['all', 'cs', 'react'];
    const selectedFilter = filters.findIndex((element) => { return filter === element});
    return (
      <>
        <FilterButton id="all" selected={selectedFilter === 0} onClick={handleButtonFilter}>All</FilterButton>
        <FilterButton id="cs" selected={selectedFilter === 1} onClick={handleButtonFilter}>C#</FilterButton>
        <FilterButton id="react" selected={selectedFilter === 2} onClick={handleButtonFilter}>React.js</FilterButton>
      </>
    )
  }

  const filterPortfolio = () => {
    if (filter === 'cs') {
      return (
        <>
          <Card id="lancaster" hovered={hover === 'lancaster' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="lancaster-logo" src={lancasterLogo} alt="Lancaster University logo" />
            <CardContent>
              <CardDescription>
                Teaching assistant and ITPI Full-Stack developer
              </CardDescription>
              <WavyLink to='/lancaster' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
        </>
      )
    }
    else if (filter === 'react') {
      return (
        <>
          <Card id="galeneo" hovered={hover === 'galeneo' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="galeneo-logo" src={galeneoLogo} alt="Galeneo logo" />
            <CardContent>
              <CardDescription>
                Full-Stack Developer For Galeneo
              </CardDescription>
              <WavyLink to='/galeneo' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
        </>
      ) 
    }
    else {
      return (
        <>
          <Card id="lancaster" hovered={hover === 'lancaster' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="lancaster-logo" src={lancasterLogo} alt="Lancaster University logo" />
            <CardContent>
              <CardDescription>
                Teaching assistant and ITPI Full-Stack developer
              </CardDescription>
              <WavyLink to='/lancaster' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card id="galeneo" hovered={hover === 'galeneo' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="galeneo-logo" src={galeneoLogo} alt="Galeneo logo" />
            <CardContent>
              <CardDescription>
                Full-Stack Developer For Galeneo
              </CardDescription>
              <WavyLink to='/galeneo' color="var(--pink)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(5px + 1vw)', height: 'calc(5px + 2vh)' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(4px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white'
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
        </>
      )
    }
  }

  return (
    <Section id="portfolio">
      <PortfolioContent>
        <Title>MY PREVIOUS WORK</Title>
        <ButtonGroup>
          {filterButtons()}
        </ButtonGroup>
        <CardGroup>
          {filterPortfolio()}
        </CardGroup>
      </PortfolioContent>
    </Section>
  )
}

const hideAnimation = keyframes`
  from {opacity: 1; height: 100%;}
  to {opacity: 0; height: 0;}
`;

const PortfolioContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(var(--light-blue), var(--pink), var(--purple));
  overflow-y: hidden;
`;

const Title = styled.h1`
  position: relative;
  border-bottom: 2px solid var(--light-black);
`;

const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  * {
    margin: 10px 10px;
  }
`;

const FilterButton = styled.button <{ selected?: boolean}>`
  ${props => props.selected ? 'background-color: var(--light-black); color: white;' : 'background: none !important; color: var(--light-black);'}
  border: none;
  padding: 2px 2px;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const CardGroup = styled.div`
  width: 70%;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.7);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--light-grey);
  border: 1px solid black;
`;

const CardDescription = styled.div`
  height: 50%;
  width: 50%;
  font-size: calc(5px + 1vw);
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  background: var(--white);
  object-fit: contain;
  padding: 25px 25px;
`;

const Card = styled.div <{hovered?: boolean}>` 
  // width: 50vh;
  width: 50%;
  height: 50vh;
  text-align: center;
  vertical-align: middle;

  ${props => props.hovered ? 'cursor: pointer;' : 'cursor: auto;'}

  ${CardImage} {
    ${props => props.hovered ? 'display: none;' : 'display: auto;'}
  }

  ${CardContent} {
    ${props => props.hovered ? `
      visibility: visible;
      `
      :
      'visibility: hidden;'
    }
  }
`;

// &:before {
//   opacity: 1;
//   animation: ${hideAnimation} 1s ease 3.5s forwards;
// }

// &:after {
//   opacity: 0;
//   animation: ${hideAnimation} 1s ease 3.5s forwards;
// }

export default { Portfolio };
export { Portfolio };
