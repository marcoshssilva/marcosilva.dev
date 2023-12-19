"use client";
import { Box, Button, Container, Typography } from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MenuComponent from "./components/menu/menu";

export default function Home() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <MenuComponent />
      <Container>
        <Box className="min-h-screen flex flex-col items-start justify-center px-5">

            <Typography className="pb-4" sx={{ width: '100%' }} variant={ isTablet ? 'h2' : 'h5'} align={ isTablet ? 'left' : 'center'}>Prazer, eu sou</Typography>
            <Typography className="pb-4" sx={{ width: '100%' }} variant={ isTablet ? 'h1' : 'h3'} align={ isTablet ? 'left' : 'center'}>Marcos Henrique</Typography>
            <Typography className="pb-4" sx={{ width: '100%' }} variant={ isTablet ? 'h2' : 'h3'} align={ isTablet ? 'left' : 'center'}>Desenvolvo aplicações para a web.</Typography>

            <Box className="w-full flex justify-center md:justify-start">
              <Button 
                startIcon={ <LinkedInIcon /> } 
                href="https://www.linkedin.com/in/marcos-henrique-santana/" 
                target="_blank">
                LinkedIn
              </Button>
              <Button 
                startIcon={ <GitHubIcon /> } 
                href="https://github.com/marcoshssilva" 
                target="_blank">
                GitHub
              </Button>
            </Box>
            

        </Box>
      </Container>

    </>
  );
}
