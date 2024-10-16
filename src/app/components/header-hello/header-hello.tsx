import React from "react";
import {
  Box,
  Container,
} from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box id="header-hello" className="relative">
      <Container className={"lg:pt-0 container-full-with-menu grid px-6 grid-cols-1 md:grid-cols-12 gap-5"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headers/me-right.png"
             className="absolute bottom-0 right-0 w-[778px] h-auto"
             alt=""
             loading="lazy"
             decoding="async" />
      </Container>
    </Box>
    </>;
}
