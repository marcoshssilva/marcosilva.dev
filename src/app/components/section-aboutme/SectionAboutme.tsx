import React from "react";
import {
  Box, Container, Typography
} from "@mui/material";

export default function SectionAboutme() {
  return <>
    <Box component={'section'} id="section-aboutme" className="relative box-section background-aboutme">
      <Container className='min-h-screen pt-[127px]'>
        <Typography align='center' className='section-aboutme-title px-4'>
          Marcos Henrique
        </Typography>
        <Box className='grid grid-cols-1 md'></Box>
      </Container>
    </Box>
  </>
}
