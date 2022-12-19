import { AppBar, Toolbar, Container, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, MouseEvent, useEffect } from 'react';
import { WavyLink } from 'react-wavy-transitions';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useWindowDimensions from '../functions/window';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const sections = ["About", "Portfolio", "Contact"];
    const { height, width } = useWindowDimensions();

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    }

    return (
    <AppBar position="fixed" sx={{ backgroundColor: 'var(--light-black)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '120px',
              }}
            >
              <WavyLink to={`/`} color={`var(--dark-pink)`}>
                <MenuItem key="home" onClick={handleCloseNavMenu} style={{ width: '120px' }}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </WavyLink>
              {sections.map((section) => (
                <WavyLink to={`/${section.toLowerCase()}`} color={`var(--dark-pink)`}>
                  <MenuItem key={section} onClick={handleCloseNavMenu} style={{ width: '120px' }}>
                    <Typography textAlign="center">{section}</Typography>
                  </MenuItem>
                </WavyLink>
              ))}
            </Menu>
            <Button disabled sx={{ my: 1, position: 'absolute', display: 'block', right: '10px'}}><span style={{color: 'var(--white)'}}>ISKAK TOLTAY </span><span style={{color: 'var(--dark-pink)'}}>©2022</span></Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <WavyLink to={`/`} color={`var(--dark-pink)`}>
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Arial, Helvetica, sans-serif', ':hover': {backgroundColor: 'var(--grey)'} }}
              >
                Home
              </Button>
            </WavyLink>
            {sections.map((section) => (
              <WavyLink to={`/${section.toLowerCase()}`} color={`var(--dark-pink)`}>
                <Button
                key={section}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Arial, Helvetica, sans-serif', ':hover': {backgroundColor: 'var(--grey)'} }}
                >
                  {section}
                </Button>
              </WavyLink>
            ))}
            <Button disabled sx={{ my: 2, position: 'absolute', display: 'block', right: '10px'}}><span style={{color: 'var(--white)'}}>ISKAK TOLTAY </span><span style={{color: 'var(--dark-pink)'}}>©2022</span></Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default Navbar;