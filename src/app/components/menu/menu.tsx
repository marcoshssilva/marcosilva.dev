import React from "react";
import Image from 'next/image';
import {
  AppBar,
  Box, Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuLogoGroup from "@/app/components/menu/menu-logo-group";

export default function MenuComponent() {
  return (
    <div className={'menu-box'}>
        <AppBar position={'sticky'} color={'transparent'}>
          <Container>
            <Toolbar className={"items-center"}>
              <Box sx={{ marginY: 8 }}>
                <MenuLogoGroup />
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
