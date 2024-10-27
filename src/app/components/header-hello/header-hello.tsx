import React from "react";
import HeaderButtonHello from "@/app/components/header-button-hello/header-button-hello";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

export default function HeaderHelloComponent() {
  return <Box component={'header'} id="header-hello" className="relative box-section">
      <Container className={"lg:pt-0 min-h-screen grid grid-cols-1 md:grid-cols-12 gap-5 pt-[97px]"}>
        <Box className={'absolute top-1/2 -translate-y-1/2 p-3'}>
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
            Desenvolvedor de Software
          </Typography>
          <Typography sx={{
            fontFamily: "'Open Sans', sans-serif",
            textAlign: { xs: 'center', md: 'left' },
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.35)',
          }}>
            {'\"'}As pessoas não sabem o que querem, até mostrarmos a elas.{'\"'} <br/>
            &nbsp; - Steve Jobs
          </Typography>
          <Divider sx={{ marginY: '1.5rem', width: { md: '33%' } }} color={'ffc409'}></Divider>
          <Box className={'flex gap-4 flex-col md:flex-row md:w-[60%]'}>
            <HeaderButtonHello
              content={'Diga-me olá'}
              variant={'contained'}
              color={"inherit"}
            />
            <HeaderButtonHello
              content={'Meus projetos'}
              variant={'text'}
              color={"inherit"}
              href='/#section-projects'
              icon={ <CallMadeOutlinedIcon /> }
            />
          </Box>
        </Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/Laptop.png"
             className="block fixed bottom-0 left-0 h-auto md:w-[70%] -z-10"
             alt="illustrated image from myself"
             loading="lazy"
             decoding="async" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/me.png"
             className="fixed bottom-0 right-0 h-auto w-[130vh] sm:w-[80vw] sm:translate-x-[8rem] md:w-[60vw] 2xl:w-[40vw] translate-x-[150px] md:translate-x-0 -z-10"
             alt="illustrated image from myself"
             loading="lazy"
             decoding="async" />
      </Container>
    </Box>;
}
