import React, { ReactNode } from 'react'
import styled from 'styled-components';

interface ISectionProps {
    title?: string;
    children: ReactNode;
}

function Section(props: ISectionProps) {
  return (
    <AppSection>
        {props.children}
    </AppSection>
  )
}

const AppSection = styled.section`
  width: 100%; 
  height: 100vh;
`;

const Title = styled.div`
    display: inline;
`;

export default Section;