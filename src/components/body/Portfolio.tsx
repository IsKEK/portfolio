import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import galeneoLogo from '../../img/galeneo.png';
import lancasterLogo from '../../img/lancaster.jpg';
import enactusLogo from '../../img/enactus.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    
  }, [filter])

  const handleButtonFilter = (e: any) => {
    setFilter(e.target.id);
  }
  
  const handleCardHover = (e: any) => {
    console.log(e);
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
    // const filters = ['cs', 'react'];
    // const selectedFilter = filters.findIndex((element) => { return filter === element});
    if (filter === 'cs')
      return (
        <>
          <Card onMouseOver={handleCardHover}><CardImage src={lancasterLogo} alt="Lancaster University logo" /></Card>
          <Card onMouseOver={handleCardHover}><CardImage src={enactusLogo} alt="Enactus logo" /></Card>
        </>
      )
    else if (filter === 'react')
      return (
        <>
          <Card onMouseOver={handleCardHover}><CardImage src={galeneoLogo} alt="Galeneo logo" /></Card>
          <Card onMouseOver={handleCardHover}><CardImage src={enactusLogo} alt="Enactus logo" /></Card>
        </>
      ) 
    else 
      return (
        <>
          <Card onMouseOver={handleCardHover}><CardImage src={lancasterLogo} alt="Lancaster University logo" /></Card>
          <Card onMouseOver={handleCardHover}><CardImage src={enactusLogo} alt="Enactus logo" /></Card>
          <Card onMouseOver={handleCardHover}><CardImage src={galeneoLogo} alt="Galeneo logo" /></Card>
        </>
      )
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

const PortfolioContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(var(--light-blue), var(--pink), var(--purple));
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 7vh;
`;

const Title = styled.h1`
  position: relative;
  border-bottom: 2px solid var(--light-black);
  // margin-bottom: 20vh;
  // z-index: 3000;
`;

const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 50vh;
  height: 50vh;
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;
  // line-height: 23.3vh;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  background: var(--white);
  object-fit: contain;
  padding: 10px 10px;
`;

export default { Portfolio };
export { Portfolio };
