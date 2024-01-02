import { Box, Container } from "@mui/material";

import MenuComponent from "./components/menu/menu";
import HeaderHelloComponent from "./components/header-hello/header-hello";
import HeaderGroupButtonsComponent from "./components/header-group-buttons/header-group-buttons";
import HeaderContactMe from "./components/header-contact-me/header-contact-me";


export default function Home() {
  return (
    <>
        <MenuComponent />
        <Container className={"min-h-screen pt-[72px] lg:pt-0"} sx={{ position: 'relative' }}>
          <Box className={"grid lg:top-2/4 lg:translate-y-1/2 px-6 grid-cols-1 lg:grid-cols-12 gap-5"}>
            <Box className={'col-span-1 lg:col-span-7 h-full'}>
              <HeaderHelloComponent />
              <HeaderGroupButtonsComponent />
            </Box>
            <Box className={'col-span-1 lg:col-span-5 h-full'}>
              <HeaderContactMe />
            </Box>
          </Box>
        </Container>
    </>
  );
}
