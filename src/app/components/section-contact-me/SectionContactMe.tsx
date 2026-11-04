"use client";
import React from "react";
import { Box, Container, ThemeProvider, Typography, createTheme } from "@mui/material";

import FormContactMe from "@/app/components/form-contact-me/FormContactMe";
import PixelDevCard from "@/app/components/pixel-dev-card/PixelDevCard";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SectionContactMe() {
  return (
    <Box
      component={'section'}
      id="section-contact-me"
      className={'relative box-section background-contact-me contact-section-screen-frame'}
      sx={{
        minHeight: "100vh",
        m: { xs: 1, md: 2 },
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Top Bar de Borda sobre toda a tela da Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 3 },
          py: 1,
          backgroundColor: "#151924",
          borderBottom: "2px solid #262c3d",
          fontFamily: "monospace",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 8, height: 8, backgroundColor: "#eb445a" }} />
          <Box sx={{ width: 8, height: 8, backgroundColor: "#ffc409" }} />
          <Box sx={{ width: 8, height: 8, backgroundColor: "#2dd36f" }} />
          <Typography
            variant="caption"
            sx={{
              ml: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#AA954F",
              letterSpacing: "0.08em",
              fontSize: "0.72rem",
            }}
          >
            SYS://MARCOSILVA.DEV/CONTATE-ME
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            fontFamily: "monospace",
            color: "#92949c",
            fontSize: "0.68rem",
            display: { xs: "none", sm: "inline" },
          }}
        >
          [MODO INTERATIVO 8-BIT // PORTA: 443]
        </Typography>
      </Box>

      <Container className={'py-[48px] px-4'}>
        {/* Cabeçalho Estilizado #Contate-me em estilo Retro HUD / Arcade */}
        <Box
          sx={{
            mb: 3,
            p: { xs: 2, md: 2.5 },
            backgroundColor: "#0d1017",
            border: "2px solid #AA954F",
            boxShadow: "inset 0 0 0 2px #1c2230, 0 6px 20px rgba(0,0,0,0.5)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "monospace",
                  color: "#00e1ff",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontSize: "0.7rem",
                }}
              >
                {"[SECTION_03 // DIRECT_CHANNEL]"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 6,
                  height: { xs: 32, md: 42 },
                  backgroundColor: "#ffc409",
                  boxShadow: "0 0 10px rgba(255, 196, 9, 0.5)",
                }}
              />
              <Typography
                className="section-contactme-title"
                variant="h2"
                align="left"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                  lineHeight: 1.1,
                  m: 0,
                }}
              >
                #Contate-me
              </Typography>
            </Box>

            {/* Barra pixelada decorativa abaixo do título */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: 1.2 }}>
              <Box sx={{ width: 48, height: 4, backgroundColor: "#ffc409" }} />
              <Box sx={{ width: 24, height: 4, backgroundColor: "#00e1ff" }} />
              <Box sx={{ width: 12, height: 4, backgroundColor: "#2dd36f" }} />
              <Box sx={{ width: 6, height: 4, backgroundColor: "#AA954F" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.8,
              py: 1,
              backgroundColor: "#151924",
              border: "1px solid #262c3d",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                backgroundColor: "#2dd36f",
                boxShadow: "0 0 8px #2dd36f",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontFamily: "monospace",
                color: "#f4f5f8",
                fontSize: "0.74rem",
                letterSpacing: "0.05em",
              }}
            >
              {"STATUS: DISPONÍVEL PARA CONEXÃO"}
            </Typography>
          </Box>
        </Box>

        <ThemeProvider theme={darkTheme}>
          <Box className={'grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 items-stretch'}>

            <Box className={'col-span-1 flex h-full'}>
              <PixelDevCard />
            </Box>

            <FormContactMe />

          </Box>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
