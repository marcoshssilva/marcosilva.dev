import React from "react";
import Image from 'next/image';
import {
  AppBar,
  Box, Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export default function MenuComponent() {
  return (
    <div className={'menu-box'}>
        <AppBar position={'sticky'} color={'transparent'}>
          <Container>
            <Toolbar className={"items-center"}>

              <Box sx={{ marginY: 8 }}>
                <Typography component={"a"} href={"/"} className={"menu-header-logo"}>
                  <Image className={"inline-block"} src={"/images/logo/logo.png"} alt={"Icon from website"} width={62} height={62} />
                  <Box>
                    <Image
                      className={"inline-block"}
                      src={"/images/logo/MarcoSilva.png"}
                      alt={"MarcoSilva"}
                      width={115}
                      height={28.75}
                    />
                    <Image
                      id={"menu-globe"}
                      className={"inline-block"}
                      src={"/images/logo/globo-language-pink.png"}
                      alt={"globe"}
                      width={18}
                      height={18}
                    />
                    <Image
                      className={"inline-block"}
                      src={"/images/logo/DEV.png"}
                      alt={"DEV"}
                      width={36}
                      height={24}
                    />
                  </Box>
                </Typography>
              </Box>

              <Box sx={{flexGrow: 1}}></Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button size="large" color="warning" variant="text">
                  Ínicio
                </Button>
                <Button size="large" color="warning" variant="text">
                  Projetos
                </Button>
                <Button size="large" color="warning" variant="text">
                  Sobre Mim
                </Button>
              </Box>

              <Box sx={{flexGrow: 1}}></Box>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Button size="large" color="warning" variant="contained" sx={{ marginY: '8px' }}>
                  Fale Comigo
                </Button>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
    </div>
  );
}
