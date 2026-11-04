import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

import MenuLogoGroup from "@/app/components/menu/menu-logo-group";

const sectionLinks = [
  { label: "Ínicio", href: "/#header-hello" },
  { label: "Projetos", href: "/#section-projects" },
  { label: "Sobre Mim", href: "/#section-aboutme" },
  { label: "Fale Comigo", href: "/#section-contact-me" },
];

const dataControlLinks = [
  { label: "Termos de Serviço", href: "#termos-de-servico" },
  { label: "Política de Privacidade", href: "#politica-de-privacidade" },
];

const projectGithubLinks = [
  {
    title: "MHPasswordManager",
    href: "https://github.com/marcoshssilva/MHPasswordManager",
  },
  {
    title: "Azure Client-AI",
    href: "https://github.com/marcoshssilva/client-ai",
  },
  {
    title: "AppRegistra Notas",
    href: "https://github.com/marcoshssilva/app-registranotas-react-native",
  },
  {
    title: "Global-Library",
    href: "https://github.com/marcoshssilva/global-library",
  },
  {
    title: "Nexus3 Helm",
    href: "https://github.com/marcoshssilva/nexus3-kubernetes",
  },
  {
    title: "Docker Jenkins Agent",
    href: "https://github.com/marcoshssilva/docker-jenkins-agent",
  },
];

export default function FooterMenu() {
  return (
    <Box
      component="footer"
      id="footer-menu"
      sx={{
        width: "100%",
        mt: 8,
        backgroundColor: "#181d2c",
        backgroundImage: "linear-gradient(180deg, #181d2c 0%, #111520 100%)",
        borderTop: "1px solid #2b3248",
        color: "#d7d8da",
      }}
    >
      <Container sx={{ pt: 6, pb: 4, px: { xs: 3, md: 4 } }}>
        <Box className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Coluna 1: Marca e Redes */}
          <Box className="md:col-span-4 flex flex-col justify-between">
            <Box>
              <Box sx={{ display: "inline-block", mb: 2 }}>
                <MenuLogoGroup />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.82rem",
                  color: "#9d9fa6",
                  lineHeight: 1.65,
                  mb: 2.5,
                  maxWidth: "340px",
                }}
              >
                Desenvolvedor Fullstack com foco em arquitetura Java, microsserviços, infraestrutura Cloud e automação DevOps.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="a"
                href="https://github.com/marcoshssilva"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: "#d7d8da",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#ffc409" },
                  "&::before": { display: "none !important" },
                }}
              >
                <GitHubIcon fontSize="small" />
                GitHub
              </Box>

              <Box
                component="a"
                href="https://www.linkedin.com/in/marcos-henrique-santana/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  color: "#d7d8da",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#00e1ff" },
                  "&::before": { display: "none !important" },
                }}
              >
                <LinkedInIcon fontSize="small" />
                LinkedIn
              </Box>
            </Box>
          </Box>

          {/* Coluna 2: Links Rápidos / Seções */}
          <Box className="md:col-span-2" component="nav" aria-label="Menu de navegação do rodapé">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#ffc409",
                letterSpacing: "0.08em",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Navegação
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              {sectionLinks.map((item) => (
                <Box component="li" key={item.href}>
                  <Box
                    component="a"
                    href={item.href}
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.84rem",
                      color: "#d7d8da",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#00e1ff" },
                      "&::before": { display: "none !important" },
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Coluna 3: Repositórios GitHub dos Projetos */}
          <Box className="md:col-span-3">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#ffc409",
                letterSpacing: "0.08em",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Repositórios GitHub
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              {projectGithubLinks.map((repo) => (
                <Box component="li" key={repo.href}>
                  <Box
                    component="a"
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.6,
                      fontFamily: "monospace",
                      fontSize: "0.82rem",
                      color: "#d7d8da",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#00e1ff" },
                      "&::before": { display: "none !important" },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: "0.95rem", color: "#9d9fa6" }} />
                    <span>{repo.title}</span>
                    <CallMadeOutlinedIcon sx={{ fontSize: "0.75rem", color: "#9d9fa6" }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Coluna 4: Controle dos Dados */}
          <Box className="md:col-span-3">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#ffc409",
                letterSpacing: "0.08em",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Controle dos Dados
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              {dataControlLinks.map((item) => (
                <Box component="li" key={item.href}>
                  <Box
                    component="a"
                    href={item.href}
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.84rem",
                      color: "#d7d8da",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#00e1ff" },
                      "&::before": { display: "none !important" },
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.08)" }} />

        {/* Linha Inferior de Direitos Autorais */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "monospace",
              color: "#92949c",
              fontSize: "0.75rem",
            }}
          >
            {"© Marcos Henrique // marcosilva.dev — Todos os direitos reservados."}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "monospace",
              color: "#92949c",
              fontSize: "0.72rem",
            }}
          >
            {"Desenvolvido com Next.js, React & TypeScript"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
