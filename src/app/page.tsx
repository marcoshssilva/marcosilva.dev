'use client'
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import MenuComponent from "./components/menu/menu";
import HeaderHelloComponent from "./components/header-hello/header-hello";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <MenuComponent />
        <HeaderHelloComponent />
      </ThemeProvider>
    </>
  );
}
