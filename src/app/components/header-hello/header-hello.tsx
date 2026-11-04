import React from "react";
import HeaderButtonHello from "@/app/components/header-button-hello/header-button-hello";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

export default function HeaderHelloComponent() {
  return (
    <Box component={'header'} id="header-hello" className="relative box-section background-header-hello">
      <Container className={"lg:pt-0 min-h-screen grid grid-cols-1 md:grid-cols-12 gap-5 pt-[97px]"}>
        <Box
          className={'absolute top-1/2 -translate-y-1/2 overflow-hidden'}
          sx={{
            maxWidth: { xs: "92vw", md: "760px" },
            backgroundColor: "rgba(13, 16, 23, 0.88)",
            backdropFilter: "blur(8px)",
            border: "2px solid #AA954F",
            boxShadow: "inset 0 0 0 2px #1c2230, 0 12px 36px rgba(0, 0, 0, 0.75)",
            borderRadius: "8px",
          }}
        >
          {/* Top HUD Bar do Header Hello */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
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
                SYS://MARCOSILVA.DEV/HOME
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 1,
                py: 0.2,
                backgroundColor: "#0b0e17",
                border: "1px solid #2dd36f",
                color: "#2dd36f",
                fontFamily: "monospace",
                fontSize: "0.65rem",
                fontWeight: 700,
              }}
            >
              ONLINE // V1.2.0
            </Box>
          </Box>

          {/* Corpo do Hero */}
          <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontFamily: "monospace",
                color: "#00e1ff",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.72rem",
                mb: 0.5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {"[BOOT_SEQUENCE // WELCOME]"}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#ffc409",
                fontSize: { xs: '1.15rem', md: '1.65rem' },
                textAlign: { xs: 'center', md: 'left' },
                letterSpacing: "0.04em",
              }}
            >
              Bem-vindo(a) ao meu portifólio
            </Typography>

            <Image
              className={'my-0 mx-auto lg:mx-0'}
              src={"/images/headers/Title.png"}
              alt={"DEV"}
              width={720}
              height={178}
              style={{
                paddingTop: '1rem',
                paddingBottom: '0.5rem',
                filter: "drop-shadow(0 0 14px rgba(0, 225, 255, 0.2))",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1.5,
                pb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: { xs: 22, md: 30 },
                  backgroundColor: "#00e1ff",
                  boxShadow: "0 0 8px #00e1ff",
                  display: { xs: "none", md: "block" },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#f4f5f8",
                  fontSize: { xs: '1.15rem', md: '1.75rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Desenvolvedor de Software
              </Typography>
            </Box>

            {/* Citação em estilo Prompt de Terminal */}
            <Box
              sx={{
                backgroundColor: "#0b0e17",
                border: "1px solid #262c3d",
                borderLeft: "3px solid #ffc409",
                px: 2,
                py: 1.2,
                my: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: "#d7d8da",
                  textAlign: { xs: 'center', md: 'left' },
                  lineHeight: 1.5,
                }}
              >
                <Box component="span" sx={{ color: "#ffc409", fontWeight: 700, mr: 1 }}>
                  {">_"}
                </Box>
                {'\"'}As pessoas não sabem o que querem, até mostrarmos a elas.{'\"'} <br/>
                <Box component="span" sx={{ color: "#00e1ff", fontSize: "0.78rem" }}>
                  &nbsp; - Steve Jobs
                </Box>
              </Typography>
            </Box>

            {/* Barra pixelada decorativa */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 0.75,
                my: 2,
              }}
            >
              <Box sx={{ width: 56, height: 4, backgroundColor: "#ffc409" }} />
              <Box sx={{ width: 28, height: 4, backgroundColor: "#00e1ff" }} />
              <Box sx={{ width: 14, height: 4, backgroundColor: "#2dd36f" }} />
              <Box sx={{ width: 6, height: 4, backgroundColor: "#AA954F" }} />
            </Box>

            <Box className={'flex gap-4 flex-col md:flex-row'}>
              <HeaderButtonHello
                content={'Diga-me olá'}
                variant={'contained'}
                color={"inherit"}
                href='/#section-contact-me'
              />
              <HeaderButtonHello
                content={'Meus projetos'}
                variant={'text'}
                color={"inherit"}
                href='/#section-projects'
                icon={<CallMadeOutlinedIcon fontSize="small" />}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
