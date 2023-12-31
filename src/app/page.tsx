import { Box, Container } from "@mui/material";

import MenuComponent from "./components/menu/menu";
import HeaderHelloComponent from "./components/header-hello/header-hello";
import HeaderGroupButtonsComponent from "./components/header-group-buttons/header-group-buttons";
import HeaderGroupLangsComponent from "./components/header-group-langs/header-group-langs";

export default function Home() {
  return (
    <>
      <MenuComponent />
      <Container className={"min-h-screen"} sx={{ position: 'relative' }}>
        <Box className={"grid pt-[17%] px-6 grid-cols-12"}>
          <Box className={'col-span-8'}>
            <HeaderHelloComponent />
          </Box>
          <Box className={'col-span-4'}>
            <HeaderGroupLangsComponent />
          </Box>
        </Box>
        <Box className={'py-6 w-[52%] pl-[16px]'}>
          <hr className=""/>
        </Box>
        <Box className={"px-6"}>
          <HeaderGroupButtonsComponent />
        </Box>
      </Container>

    </>
  );
}
