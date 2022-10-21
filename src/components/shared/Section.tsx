import React, { ReactNode } from 'react'
import styled from 'styled-components';

interface ISectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    // backgroundColor: string;
    // paddingTop: string;
}

function Section(props: ISectionProps) {
  return (
    <AppSection id={props.id}>
      {props.children}
    </AppSection>
  )
}

const AppSection = styled.section`
  width: 100%; 
  height: 100vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

// const SectionContent = styled.div <{ backgroundColor: string, paddingTop: string }>`
//   height: 100%;
//   width: 100%;
//   text-align: center; 
//   padding-top: ${props => props.paddingTop ? `${props.paddingTop}` : '0px'};
//   background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : 'white'};
// `;

const Title = styled.div`
    display: inline;
`;

export default Section;