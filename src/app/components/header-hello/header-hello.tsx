import React from "react";
import {
  Box,
  Container,
} from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box id="header-hello" className="relative box-section">
      <Container className={"lg:pt-0 container-full-with-menu grid px-6 grid-cols-1 md:grid-cols-12 gap-5"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/me.png"
             className="absolute bottom-0 right-0 h-auto sm:w-[80vw] md:w-[60vw] 2xl:w-[40vw]"
             alt="illustrated image from myself"
             loading="lazy"
             decoding="async" />
      </Container>
    </Box>
    </>;
}
