import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import styled from 'styled-components';
import { WavyLink } from 'react-wavy-transitions';
import useWindowDimensions from '../../functions/window';

interface IBackButtonProps {
  color: string
  transitionColor: string
}

const BackButton = (props: IBackButtonProps) => {
  const { height, width } = useWindowDimensions();

  return (
    <WavyLink to='/portfolio' color={props.transitionColor}>
      <ContainerOutside
        sx={{ position: 'fixed', top: '10vh', left: '5vw', height: '7vh', width: '15vw', fontSize: '1.5vh', fontFamily: 'VarelaRound, sens-serif !important', display: 'flex', color: `${props.color}`, ':hover': {backgroundColor: `${props.transitionColor}`} }}
        startIcon={<ArrowBackIcon style={{width: '3vh', height: '2.5vh', display: 'flex', marginBottom: '3px' }}/>}
      >
        { width > height && (<b>Back to portfolio</b>)}
      </ContainerOutside>
    </WavyLink>
  )
}

const ContainerOutside = styled(Button)`
  position: absolute;
  top: 135px;
  left: 50px;
  &: focus {
    outline: 0;
  }
  z-index: 100;
`;

export default { BackButton };
export { BackButton };