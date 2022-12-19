import React from 'react'
import styled from 'styled-components';
import useWindowDimensions from '../../functions/window';
import lancasterLogo from '../../img/lancasterLogo.svg';
import { BackButton } from '../shared';

const Lancaster = () => {
    const { height, width } = useWindowDimensions();

    return (
        <LancasterContent>
            <BackButton transitionColor={'var(--grey)'} color={'var(--light-black)'}></BackButton>
            <LancasterLogo width={width} height={height} src={lancasterLogo}></LancasterLogo>
            <LancasterDesc width={width} height={height}>
                Lancaster University is a well-known university in the United Kingdom,<br/>
                which consistently holds top-20 placements in the UK university rankings.<br/>
                Previously I have worked as a Junior Full-stack Developer for University's ITPI team.<br/>
                I have taken part in developing several software projects for Lancaster University.<br/>
                {/* The platform's goal is to automate and simplify managing medical requests and procedures.<br/> */}
                <Tasks>
                    <b>My responsibilities were:</b>
                    <TaskList>
                        <li>Developing backend code with ASP.NET Core, MS SQL Server, and Entity Framework.</li>
                        <li>Creating unit tests with xUnit</li>
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
            </LancasterDesc>
        </LancasterContent>
    )
}

const LancasterContent = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center; 
    background-color: var(--light-grey);

    font-family: VarelaRound, sens-serif !important;

    overflow-y: hidden;
`;

const LancasterDesc = styled.div<{width: number, height: number}>`
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

const LancasterLogo = styled.img<{width: number, height: number}>`
    position: absolute;
    ${props => props.width > props.height ? `
        width: 50%;
        height: 20%;
        top: 50px;
        left: 25%;
    ` : `
        width: 80%;
        height: 40%;
        top: 50px;
        left: 10%;
    `}
    object-fit: contain;
`;

export default { Lancaster };
export { Lancaster };