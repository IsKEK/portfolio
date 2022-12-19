import React from 'react'
import styled from 'styled-components';
import useWindowDimensions from '../../functions/window';
import enactusLogo from '../../img/enactus.png';
import { BackButton } from '../shared/BackButton';

const Enactus = () => {
    const { height, width } = useWindowDimensions();

    return (
        <EnactusContent>
            <BackButton transitionColor={'var(--light-blue)'} color={'var(--white)'}></BackButton>
            <EnactusLogo width={width} height={height} src={enactusLogo}></EnactusLogo>
            <EnactusDesc width={width} height={height}>
                My first software development job was a Junior Developer role for 1K Solutions in Almaty, Kazakhstan.<br/>
                While working there, I have taken part in developing two online platforms for Enactus Kazakshtan.<br/>
                The platforms were Online Contest Management and Online Learning web applications.<br/>
                <Tasks>
                    <b>My responsibilities were:</b>
                    <TaskList>
                        <li>Developing backend code with ASP.NET Core, MS SQL Server, and Entity Framework.</li>
                        <li>Developing frontend code with React.js and Razor Pages.</li>
                        <li>Creating unit tests with xUnit and NUnit.</li>
                    </TaskList>
                </Tasks>
            </EnactusDesc>
        </EnactusContent>
    )
}

const EnactusContent = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center; 
    background-color: var(--blue);

    font-family: VarelaRound, sens-serif !important;

    overflow-y: hidden;
`;

const EnactusDesc = styled.div<{width: number, height: number}>`
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
    font-size: ${(props) => props.width > props.height ? 'calc(5px + 1vw);' : props.height > 1000 ? 'calc(5px + 1.5vh);' : 'calc(5px + 1vh);'};
    color: var(--white);
`;

const Tasks = styled.div`
    margin: 25px 0;
    padding: 0 5vw;
`;

const TaskList = styled.ul`
    text-align: left;
    // list-style-type: none;

    li {
        padding: 2% 0;
    }
`;

const EnactusLogo = styled.img<{width: number, height: number}>`
    position: absolute;
    ${props => props.width > props.height ? `
        width: 50%;
        height: 25%;
        top: 50px;
        left: 25%;
    ` : `
        width: 50%;
        height: 20%;
        top: 100px;
        left: 25%;
    `}
    object-fit: contain;
`;

export default { Enactus };
export { Enactus };