import { Box, Container } from "@mui/material";

import MenuComponent from "./components/menu/menu";
import HeaderHelloComponent from "./components/header-hello/header-hello";

export default function Home() {
  return (
    <>
      <MenuComponent />
      <Container className={"min-h-screen"} sx={{ position: 'relative' }}>
        <Box className={"grid pt-[17%] px-6"}>
          <HeaderHelloComponent />
        </Box>
      </Container>

    </>
  );
}
