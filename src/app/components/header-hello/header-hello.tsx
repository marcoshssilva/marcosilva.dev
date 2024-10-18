import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Typography,
  Button
} from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box component={'header'} id="header-hello" className="relative box-section">
      <Container className={"lg:pt-0 min-h-screen grid grid-cols-1 md:grid-cols-12 gap-5 pt-[97px]"}>
        <Box className={'md:sticky md:top-1/2 md:bottom-1/2 md:-translate-y-1/2 mt-12'}>
          <Typography variant="h1" sx={{
            fontWeight: 600,
            fontSize: { xs: '1.20rem', md: '2.12rem' },
            textAlign: { xs: 'center', md: 'left' },
            paddingTop: '3rem'
          }}>
            Bem-vindo(a) ao meu portifólio
          </Typography>
          <Image
            className={'my-0 mx-auto lg:mx-0'}
            src={"/images/headers/Title.png"}
            alt={"DEV"}
            width={720} height={178}
            style={{ paddingTop: '1.2rem', paddingBottom: '.1rem', }}
          />
          <Typography variant="h1" sx={{
            fontWeight: 300,
            fontSize: { xs: '1.20rem', md: '2.12rem' },
            textAlign: { xs: 'center', md: 'left' },
            paddingBottom: '1.2rem'
          }}>
            Desenvolvedor <span>CLOUD</span>
          </Typography>
          <Typography sx={{
            fontFamily: "'Open Sans', sans-serif",
            textAlign: { xs: 'center', md: 'left' },
          }}>
            {'\"'}As pessoas não sabem o que querem, até mostrarmos a elas.{'\"'} <br/>
            &nbsp; - Steve Jobs
          </Typography>
          <Divider sx={{ marginY: '1.5rem', width: { md: '33%' } }} color={'ffc409'}></Divider>
        </Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/me.png"
             className="md:absolute bottom-0 right-0 h-auto w-[130vh] sm:w-[80vw] sm:translate-x-[8rem] md:w-[60vw] 2xl:w-[40vw] translate-x-4 md:translate-x-0 -z-10"
             alt="illustrated image from myself"
             loading="lazy"
             decoding="async" />
      </Container>
    </Box>
    </>;
}
