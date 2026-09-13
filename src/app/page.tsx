'use client'

import React from "react";
import {
  ThemeProvider,
  createTheme,
  Box
} from "@mui/material";

import MenuComponent from "./components/menu/menu";
import HeaderHelloComponent from "./components/header-hello/header-hello";
import SectionProjects from "@/app/components/section-projects/SectionProjects";
import SectionAboutme from "@/app/components/section-aboutme/SectionAboutme";
import Background from "@/app/components/background/background";
import SectionContactMe from "./components/section-contact-me/SectionContactMe";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Background />
        <MenuComponent />
        <HeaderHelloComponent />
        <Box component={'article'}>
          <SectionProjects />
          <SectionAboutme />
          <SectionContactMe />
        </Box>
      </ThemeProvider>
    </>
  );
}
