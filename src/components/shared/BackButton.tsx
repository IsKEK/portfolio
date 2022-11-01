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
    <ContainerOutside
    sx={{ position: 'fixed', top: '10vh', left: '50px', height: '7vh', width: '20vh', fontSize: '1px', color: 'var(--light-black)', ':hover': {backgroundColor: `${props.color}`} }}
      startIcon={<ArrowBackIcon/>}
    >
      <WavyLink to='/portfolio' color={props.color}><span style={{fontSize: '1.8vh', display: 'inline-block'}}>Back to portfolio</span></WavyLink>
    </ContainerOutside>
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