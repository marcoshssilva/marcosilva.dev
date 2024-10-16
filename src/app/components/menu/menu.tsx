import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar
} from "@mui/material";
import MenuLogoGroup from "@/app/components/menu/menu-logo-group";
import {SiteMenuItemButton} from "@/app/types";

const menuItens: SiteMenuItemButton[] = [
  {
    title: "Ínicio",
    color: "warning",
    size: "large",
    variant: "text",
    key: 1,
    hash: "#home"
  },
  {
    title: "Projetos",
    color: "warning",
    size: "large",
    variant: "text",
    key: 2,
    hash: "#projects"
  },
  {
    title: "Sobre Mim",
    color: "warning",
    size: "large",
    variant: "text",
    key: 3,
    hash: "#about"
  },
]

export default function MenuComponent() {
  return (
    <div className={'menu-box z-10'}>
        <AppBar position={'sticky'} color={'transparent'}>
          <Container>
            <Toolbar className={"items-center"}>
              <Box sx={{
                    marginY: { xs: 2, md: 8 }
                  }}>
                <MenuLogoGroup />
              </Box>
              <Box sx={{flexGrow: 1}}></Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                { menuItens.map((value, index) =>
                  <>
                    <Button
                      size={value.size}
                      color={value.color}
                      variant={value.variant}
                      key={index}
                    >
                      { value.title }
                    </Button>
                  </>)
                }
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
