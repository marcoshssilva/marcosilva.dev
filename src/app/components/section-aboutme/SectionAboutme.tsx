import React from "react";
import {
  Box, Container, Typography
} from "@mui/material";

export default function SectionAboutme() {
  return <>
    <Box component={'section'} id="section-aboutme" className="relative box-section background-aboutme">
      <Container className='min-h-screen pt-[97px]'>
        <Typography
          className='section-aboutme-title'
          variant='h1'
          align='left'
          sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
        >
          #Sobre Mim
        </Typography>
        <Box className='grid grid-cols-1 md'></Box>
      </Container>
    </Box>
  </>
}
