import React, { ReactNode } from 'react'
import styled from 'styled-components';

interface ISectionProps {
    id: string;
    title?: string;
    children: ReactNode;
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
`;

const Title = styled.div`
    display: inline;
`;

export default Section;