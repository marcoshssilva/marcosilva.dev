import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuLogoGroup from "@/app/components/menu/menu-logo-group";
import { SiteMenuItemButton } from "@/app/types";

const menuItens: SiteMenuItemButton[] = [
  {
    title: "Ínicio",
    color: "warning",
    size: "large",
    variant: "text",
    key: 1,
    hash: "/#header-hello",
  },
  {
    title: "Projetos",
    color: "warning",
    size: "large",
    variant: "text",
    key: 2,
    hash: "/#section-projects",
  },
  {
    title: "Sobre Mim",
    color: "warning",
    size: "large",
    variant: "text",
    key: 3,
    hash: "/#section-aboutme",
  },
];

export default function MenuComponent() {
  return (
    <AppBar
      component={"nav"}
      className="menu-box z-10"
      position={"sticky"}
      color={"transparent"}
    >
      {/* Top Micro Status Strip do Menu */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          py: 0.4,
          backgroundColor: "#151924",
          borderBottom: "1px solid #262c3d",
          fontFamily: "monospace",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <Box sx={{ width: 6, height: 6, backgroundColor: "#eb445a" }} />
          <Box sx={{ width: 6, height: 6, backgroundColor: "#ffc409" }} />
          <Box sx={{ width: 6, height: 6, backgroundColor: "#2dd36f" }} />
          <Typography
            variant="caption"
            sx={{
              ml: 0.8,
              fontFamily: "monospace",
              color: "#AA954F",
              fontWeight: 700,
              fontSize: "0.64rem",
              letterSpacing: "0.08em",
            }}
          >
            NAV_SYS // MARCOSILVA.DEV
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              backgroundColor: "#2dd36f",
              boxShadow: "0 0 6px #2dd36f",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontFamily: "monospace",
              color: "#92949c",
              fontSize: "0.64rem",
              letterSpacing: "0.05em",
            }}
          >
            {"[SESSION: ACTIVE // UTF-8]"}
          </Typography>
        </Box>
      </Box>

      <Container>
        <Toolbar className={"items-center"} sx={{ py: 0.75 }}>
          <Box sx={{ my: 0.5 }}>
            <MenuLogoGroup />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Dock de Navegação Estilo Terminal */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              p: 0.6,
              backgroundColor: "#0b0e17",
              border: "1px solid #262c3d",
              borderRadius: "6px",
            }}
          >
            {menuItens.map((value, idx) => (
              <Button
                key={value.hash}
                size={value.size}
                color={value.color}
                variant={value.variant}
                href={value.hash}
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  color: "#f4f5f8",
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "4px",
                  border: "1px solid transparent",
                  "&:hover": {
                    backgroundColor: "#151924",
                    color: "#00e1ff",
                    borderColor: "#00e1ff",
                  },
                  "&::before": {
                    display: "none !important",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#ffc409",
                    mr: 0.75,
                    fontSize: "0.72rem",
                  }}
                >
                  {`0${idx + 1}.`}
                </Box>
                {value.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Botão CTA Principal: Fale Comigo */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              size="large"
              color="warning"
              variant="contained"
              href="#section-contact-me"
              sx={{
                my: "4px",
                backgroundColor: "#1e2436",
                color: "#ffc409",
                border: "2px solid #AA954F",
                borderRadius: "4px",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                px: 2.2,
                py: 0.8,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#283048",
                  borderColor: "#00e1ff",
                  color: "#00e1ff",
                  boxShadow: "0 0 12px rgba(0, 225, 255, 0.3)",
                },
              }}
            >
              Fale Comigo
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
