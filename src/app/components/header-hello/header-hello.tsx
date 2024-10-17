import React from "react";
import {
  Box,
  Container, Typography,
} from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box id="header-hello" className="relative box-section">
      <Container className={"lg:pt-0 h-screen min-h-[740px] grid px-6 grid-cols-1 md:grid-cols-12 gap-5"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/me.png"
             className="absolute bottom-0 right-0 h-auto sm:w-[80vw] md:w-[60vw] 2xl:w-[40vw]"
             alt="illustrated image from myself"
             loading="lazy"
             decoding="async" />

        <Box className="flex flex-col">
          <Typography variant="h1" sx={{ fontWeight: 600, fontSize: '4rem' }}>Olá, eu sou</Typography>
          <Typography variant="h1" sx={{ fontWeight: 600, fontSize: '4rem', color: 'var(--color-yellow);' }}>Marcos Henrique.</Typography>
          <Typography variant="h1" sx={{ fontWeight: 300, fontSize: '2.12rem', marginBottom: '0.75rem' }}>
            Desenvolvedor de aplicações
          </Typography>

          <Typography sx={{ paddingY: '0.5rem', paddingRight: '1rem' }} >
            Apenas um mero desenvolvedor com foco em backend, frontend, nuvem e IA.<br/>
            Sinta-se confortavel para entrar em contado comigo.
          </Typography>
        </Box>

      </Container>
    </Box>
    </>;
}
