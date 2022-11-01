import React from 'react'
import styled from 'styled-components';
import lancasterLogo from '../../img/lancasterLogo.svg';
import { BackButton } from '../shared';

const Lancaster = () => {
  return (
    <LancasterContent>
        <BackButton color={'var(--grey)'}></BackButton>
        <LancasterLogo src={lancasterLogo}></LancasterLogo>
        Lancaster University is a well-known university in the United Kingdom,<br/>
        which consistently holds top-20 placements in UK university rankings.<br/>
        Previously I have worked as a Junior Full-stack Developer for University's ITPI team.<br/>
        I am taking part in developing an online web platform for Lancaster.<br/>
        The platform's goal is to automate and simplify managing medical requests and procedures.<br/>
        <Tasks>
            <b>My responsibilities are:</b>
            <TaskList>
                <li>Developing frontend code for the platform with React.js, Typescript, and React's styled components as an alternative for CSS.</li>
                <li>Developing backend code for the platform with AWS Amplify, DynamoDB, and AWS AppSync (GraphQL)</li>
                <li>Creating end-to-end tests for the platform in Cypress</li>
            </TaskList>
        </Tasks>
    </LancasterContent>
  )
}

const LancasterContent = styled.div`
    height: 120vh;
    width: 100%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--light-grey);

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

const LancasterLogo = styled.img`
    position: relative;
    width: 50%;
    height: 20%;
    object-fit: contain;
`;

export default { Lancaster };
export { Lancaster };