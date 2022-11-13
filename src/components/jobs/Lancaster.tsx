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
        which consistently holds top-20 placements in the UK university rankings.<br/>
        Previously I have worked as a Junior Full-stack Developer for University's ITPI team.<br/>
        I was taking part in developing several software projects for Lancaster University.<br/>
        {/* The platform's goal is to automate and simplify managing medical requests and procedures.<br/> */}
        <Tasks>
            <b>My responsibilities were:</b>
            <TaskList>
                <li>Developing backend code in ASP.NET Core, MS SQL Server, and Entity Framework.</li>
                <li>Creating unit tests with xUnit and NUnit.</li>
                <li>Taking part in innovation boxes to come up with ideas for new software projects.</li>
            </TaskList>
        </Tasks>
        <div>
            <b>The projects I have worked on:</b>
            <ProjectList>
                <li><a href="https://portal.lancaster.ac.uk/ask/mobile/">ILancaster</a></li>
                <li><a href="https://www.lancaster.ac.uk/landing/thankcaster/">Wall for Thankcaster event</a></li>
            </ProjectList>
        </div>
        
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

const ProjectList = styled.ul`
    text-align: center;
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