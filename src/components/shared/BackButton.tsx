import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import styled from 'styled-components';
import { WavyLink } from 'react-wavy-transitions';

interface IBackButtonProps {
  color: string
}

const BackButton = (props: IBackButtonProps) => {
  return (
    <WavyLink to='/portfolio' color={props.color}>
      <ContainerOutside
        sx={{ position: 'fixed', top: '10vh', left: '50px', height: '7vh', width: '25vh', fontSize: '1.5vh', display: 'flex', color: 'var(--light-black)', ':hover': {backgroundColor: `${props.color}`} }}
        startIcon={<ArrowBackIcon style={{width: '2.5vh', height: '2vh', display: 'flex'}}/>}
      >
        <b>Back to portfolio</b>
      </ContainerOutside>
    </WavyLink>
  )
}

const ContainerOutside = styled(Button)`
  position: fixed;
  top: 135px;
  left: 50px;
  &: focus {
    outline: 0;
  }
`;

export default { BackButton };
export { BackButton };