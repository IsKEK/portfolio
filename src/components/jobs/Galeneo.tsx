import React from 'react'
import styled from 'styled-components';
import useWindowDimensions from '../../functions/window';
import galeneoLogo from '../../img/galeneoLogo.png';
import { BackButton } from '../shared/BackButton';

const Galeneo = () => {
    const { height, width } = useWindowDimensions();
    
    return (
        <GaleneoContent>
            <BackButton transitionColor={'var(--dark-orange)'} color={'var(--light-black)'}></BackButton>
            <GaleneoLogo width={width} height={height} src={galeneoLogo}></GaleneoLogo>
            <GaleneoDesc width={width} height={height}>
                Galeneo is an online hospital that provides standardized medical and therapeutic procedures in-home.<br/>
                Currently, I am working as a Service Provider for Galeneo as a Full-stack Web Developer.<br/>
                I am taking part in developing an online web platform for Galeneo.<br/>
                The platform's goal is to automate and simplify managing medical requests and procedures.<br/>
                <Tasks>
                    <b>My responsibilities are:</b>
                    <TaskList>
                        <li>Developing frontend code with React.js, Typescript, and React's styled components as an alternative for CSS.</li>
                        <li>Developing backend code with AWS Amplify, DynamoDB, and AWS AppSync (GraphQL)</li>
                        <li>Creating end-to-end tests with Cypress</li>
                    </TaskList>
                </Tasks>
                Recently, I have also started working on Galeneo's business metrics using the ETL model.<br/>
                My job is to get raw data from multiple third-party systems with Python into Google's BigQuery,<br/> 
                transform this data with custom queries in BigQuery and load it to Google's Data Studio.
            </GaleneoDesc>
        </GaleneoContent>
    )
}

const GaleneoContent = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center; 
    background-color: var(--orange);
    color: var(--light-black);
    
    font-family: VarelaRound, sens-serif !important;

    overflow-y: hidden;
`;

const GaleneoDesc = styled.div<{width: number, height: number}>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30vh 0;
    postition: relative;
    height: auto;
    width: 100%;
    padding: 0 25px;
    font-size: ${(props) => props.width > props.height ? 'calc(5px + 1vw);' : props.height > 1000 ? 'calc(5px + 1.5vh);' : 'calc(5px + 1vh);' }
`;

const Tasks = styled.div`
    margin: 20px 0;
    padding: 0 5vw;
`;

const TaskList = styled.ul`
    text-align: left;

    li {
        padding: 1.2% 0;
    }
`;

const GaleneoLogo = styled.img<{width: number, height: number}>`
    position: absolute;
    ${props => props.width > props.height ? `
        width: 50%;
        height: 15%;
        top: 75px;
        left: 25%;
    ` : `
        width: 50%;
        height: 20%;
        top: 120px;
        left: 25%;
    `}
    object-fit: contain;
`;

export default { Galeneo };
export { Galeneo };