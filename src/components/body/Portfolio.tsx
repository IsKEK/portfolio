import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WavyLink } from 'react-wavy-transitions';
import styled, { keyframes } from 'styled-components';
import { Section } from '../shared/Section';
import backgroundImage from '../../img/background.jpg'
import galeneoLogo from '../../img/galeneo.png';
import lancasterLogo from '../../img/lancaster.svg';
import enactusLogo from '../../img/enactus.png';
import useWindowDimensions from '../../functions/window';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hover, setHover] = useState('none');
  const { height, width } = useWindowDimensions();

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
          <Card width={width} height={height} id="lancaster" hovered={hover === 'lancaster' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="lancaster-logo" src={lancasterLogo} alt="Lancaster University logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Teaching assistant and ITPI Full-Stack developer
              </CardDescription>
              <WavyLink to='/lancaster' color="var(--grey)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', margin: '2px 0' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card width={width} height={height} id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--light-blue)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
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
          <Card width={width} height={height} id="galeneo" hovered={hover === 'galeneo' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="galeneo-logo" src={galeneoLogo} alt="Galeneo logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Full-Stack Developer For Galeneo
              </CardDescription>
              <WavyLink to='/galeneo' color="var(--dark-orange)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card width={width} height={height} id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--light-blue)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
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
          <Card filter={true} width={width} height={height} id="lancaster" hovered={hover === 'lancaster' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="lancaster-logo" src={lancasterLogo} alt="Lancaster University logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Teaching assistant and ITPI Full-Stack developer
              </CardDescription>
              <WavyLink to='/lancaster' color="var(--grey)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card filter={true} width={width} height={height} id="enactus" hovered={hover === 'enactus' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="enactus-logo" src={enactusLogo} alt="Enactus logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Full-Stack Developer For Enactus
              </CardDescription>
              <WavyLink to='/enactus' color="var(--light-blue)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
                  }}
                >
                  Learn more
                </Button>
              </WavyLink>
            </CardContent>
          </Card>
          <Card filter={true} width={width} height={height} id="galeneo" hovered={hover === 'galeneo' ? true : false} onMouseOver={handleCardHover} onMouseLeave={handleCardHover}>
            <CardImage id="galeneo-logo" src={galeneoLogo} alt="Galeneo logo" />
            <CardContent width={width} height={height}>
              <CardDescription>
                Full-Stack Developer For Galeneo
              </CardDescription>
              <WavyLink to='/galeneo' color="var(--dark-orange)">
                <Button 
                  endIcon={<ArrowForwardIcon style={{ width: 'calc(13px + 0.5vw)', height: 'calc(13px + 1vh)', marginBottom: '4px' }}/>}
                  sx={{
                    width: 'calc(50px + 7vw)',
                    height: 'calc(20px + 4vh)',
                    fontSize: 'calc(8px + 0.5vw)',
                    border: '1px solid var(--light-black)',
                    backgroundColor: 'var(--dark-pink)',
                    color: 'white',
                    fontFamily: 'VarelaRound, sans-serif',
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
        <CardGroup height={height} width={width}>
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
  // background: radial-gradient(var(--light-grey), var(--grey));
  // background-image: url(${backgroundImage});
  // background-repeat: no-repeat;
  // background-size: auto;
  background: radial-gradient(var(--white), var(--light-grey));
  font-family: VarelaRound, sens-serif !important;
  color: var(--light-black);
  overflow-y: hidden;
`;

const Title = styled.div`
  position: relative;
  border-bottom: 2px solid var(--light-black);
  line-height: 31px;
  font-size: 24px;
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
  ${props => props.selected ? 'background-color: var(--light-black); color: var(--white); border: 1px transparent var(--white); border-radius: 10px;' : 'background: none !important; color: var(--light-black);'}
  border: none;
  padding: 5px 5px;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const CardGroup = styled.div <{width: number, height: number}>`
  ${props => props.width > props.height ? 
    `width: 70%;
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;`
    :
    `height: 50%;
    width: 70vw;
    position: relative;
    // margin: 0 4vw;
    // margin-top: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;`
  }
  box-shadow: 5px 5px 20px rgba(0,0,0,0.7);
`;

const CardDescription = styled.div`
  display: inline;
  height: 50%;
  width: 50%;
  font-size: calc(10px + 1vw);
  text-align: left;
  position: relative;
  color: var(--light-black);
`;

const CardContent = styled.div <{width: number, height: number}>`
  display: flex;
  ${props => props.width > props.height ? `flex-direction: column; ${CardDescription} { text-align: center; }` : `flex-direction: row;`}
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--light-grey);
  border: 1px solid black;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  background: var(--light-black);
  object-fit: contain;
  padding: 25px 25px;
  // border: 1px solid white;
`;

const Card = styled.div <{hovered?: boolean, filter?: boolean, width: number, height: number}>` 
  ${props => props.width > props.height ? 
    `width: 100%;
    height: 50vh;`
    :
    props.filter ?
    `width: 100%;
    height: 33.4%;`
    :
    `width: 100%;
    height: 50%;`
  }
  text-align: center;
  vertical-align: middle;
  // horizontal-align: middle;
  // border: 1px solid white;

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
