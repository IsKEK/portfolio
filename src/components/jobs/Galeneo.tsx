import React from 'react'
import styled from 'styled-components';
import galeneoLogo from '../../img/galeneoLogo.png';
import { BackButton } from '../shared/BackButton';

const Galeneo = () => {
  return (
    <GaleneoContent>
        <BackButton color={'var(--dark-orange)'}></BackButton>
        <GaleneoLogo src={galeneoLogo}></GaleneoLogo>
        Galeneo is an online hospital that provides standardized medical and therapeutic procedures in-home.<br/>
        Currently, I am working as a Service Provider for Galeneo as a Full-stack Web Developer.<br/>
        I am taking part in developing an online web platform for Galeneo.<br/>
        The platform's goal is to automate and simplify managing medical requests and procedures.<br/>
        <Tasks>
            <b>My responsibilities are:</b>
            <TaskList>
                <li>Developing frontend code for the platform with React.js, Typescript, and React's styled components as an alternative for CSS.</li>
                <li>Developing backend code for the platform with AWS Amplify, DynamoDB, and AWS AppSync (GraphQL)</li>
                <li>Creating end-to-end tests for the platform in Cypress</li>
            </TaskList>
        </Tasks>
        Recently I also started working on Galeneo's business metrics using the ETL model.<br/>
        My job is to get raw data from multiple third-party systems with Python into Google's BigQuery,<br/> 
        transform this data with custom queries in BigQuery and load it to Google's Data Studio. 
    </GaleneoContent>
  )
}

const GaleneoContent = styled.div`
    height: 120vh;
    width: 100%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--orange);

    font-size: 2.2vh;

    & > * {
        margin: 3% 0;
    }

    overflow-y: hidden;
    margin-top: -20vh;
`;

const Tasks = styled.div`
`;

const TaskList = styled.ul`
    text-align: left;
    // list-style-type: none;

    li {
        padding: 1.2% 0;
    }
`;

const GaleneoLogo = styled.img`
    position: relative;
    width: 50%;
    height: 20%;
    object-fit: cover;
`;

export default { Galeneo };
export { Galeneo };