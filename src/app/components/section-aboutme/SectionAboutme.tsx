import React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Image from "next/image";

export default function SectionAboutme() {
  return (
    <Box
      component={'section'}
      id="section-aboutme"
      className="relative box-section background-aboutme contact-section-screen-frame"
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
            SYS://MARCOSILVA.DEV/SOBRE-MIM
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
          {"[PERFIL_DEV // BIO_DATA]"}
        </Typography>
      </Box>

      <Container className='py-[48px] px-4'>
        {/* Cabeçalho Estilizado #Sobre Mim em estilo Retro HUD */}
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
                {"[SECTION_02 // PROFILE_SPEC]"}
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
                className='section-aboutme-title'
                variant='h2'
                align='left'
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                  lineHeight: 1.1,
                  m: 0,
                }}
              >
                #Sobre Mim
              </Typography>
            </Box>

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
              {"ROLE: DESENVOLVEDOR FULLSTACK"}
            </Typography>
          </Box>
        </Box>

        {/* Sub-banner com o Nome */}
        <Box
          className='grid grid-cols-1'
          sx={{
            mb: 3,
            px: 2.5,
            py: 1.5,
            backgroundColor: "#0b0e17",
            border: "1px solid #262c3d",
            borderLeft: "4px solid #00e1ff",
            borderRadius: "4px",
          }}
        >
          <Typography
            className='section-aboutme-name'
            variant='h3'
            align='left'
            sx={{
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              m: 0,
            }}
          >
            Marcos Henrique
          </Typography>
        </Box>

        <Box className='grid grid-cols-12 gap-4 items-stretch'>

          {/* Coluna Esquerda: Biografia */}
          <Box
            className='col-span-12 lg:col-span-4 flex flex-col justify-between overflow-hidden'
            sx={{
              backgroundColor: "#0d1017",
              border: "2px solid #AA954F",
              boxShadow: "inset 0 0 0 2px #1c2230, 0 8px 24px rgba(0,0,0,0.6)",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1.5,
                py: 1,
                backgroundColor: "#151924",
                borderBottom: "2px solid #262c3d",
                fontFamily: "monospace",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: 8, height: 8, backgroundColor: "#00e1ff", boxShadow: "0 0 6px #00e1ff" }} />
                <Typography
                  className='section-aboutme-name'
                  variant='subtitle1'
                  align='left'
                  sx={{ m: 0, fontSize: "0.9rem" }}
                >
                  Biografia
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ fontFamily: "monospace", color: "#92949c", fontSize: "0.65rem" }}>
                README.MD
              </Typography>
            </Box>

            <Box sx={{ p: 2, flex: "1 1 auto", backgroundColor: "#121521" }}>
              <Typography
                sx={{ mb: 1.5, fontFamily: "monospace", fontSize: "0.82rem", color: "#f4f5f8", lineHeight: 1.55 }}
                variant='body1'
                align='justify'
              >
                Sou um profissional de Tecnologia da Informação com experiência no desenvolvimento de software para plataformas web, microserviços, cloud e mobile.
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontFamily: "monospace", fontSize: "0.82rem", color: "#f4f5f8", lineHeight: 1.55 }}
                variant='body1'
                align='justify'
              >
                Minha trajetória combina atuação técnica e entrega de projetos alinhados às necessidades estratégicas dos negócios, utilizando práticas modernas e metodologias ágeis.
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontFamily: "monospace", fontSize: "0.82rem", color: "#f4f5f8", lineHeight: 1.55 }}
                variant='body1'
                align='justify'
              >
                Mantenho-me atualizado com as tendências tecnológicas e me dedico a construir soluções que agreguem valor ao mercado.
              </Typography>
              <Typography
                sx={{ m: 0, fontFamily: "monospace", fontSize: "0.82rem", color: "#f4f5f8", lineHeight: 1.55 }}
                variant='body1'
                align='justify'
              >
                Tenho compromisso profissional em consolidar meu perfil como um profissional versátil, preparado para desafios.
              </Typography>
            </Box>
          </Box>

          {/* Coluna Central: Crachá de Desenvolvedor */}
          <Box
            className='col-span-12 md:col-span-6 lg:col-span-4 flex items-center justify-center'
            sx={{ minWidth: 0, py: 2 }}
          >
            <article className="about-profile-card" aria-label="Perfil de Marcos Henrique">
              <div className="about-profile-card__header">
                <span>PERFIL_DEV</span>
                <span aria-hidden="true">&lt;/&gt;</span>
              </div>
              <div className="about-profile-card__portrait">
                <Image
                  src='/images/me/me.jpeg'
                  width={600}
                  height={600}
                  sizes="(min-width: 1200px) 300px, (min-width: 768px) 340px, 85vw"
                  alt="Marcos Henrique"
                  className="about-profile-card__photo"
                />
              </div>
              <div className="about-profile-card__identity">
                <h3>Marcos Henrique</h3>
                <p className="about-profile-card__role">Desenvolvedor Fullstack</p>
                <p className="about-profile-card__description">
                  Construindo soluções que agreguem valor ao mercado.
                </p>
                <a href="#section-contact-me">Contrate-me <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </Box>

          {/* Coluna Direita: Experiência, Habilidades e Redes Sociais */}
          <Box
            className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-between overflow-hidden'
            sx={{
              backgroundColor: "#0d1017",
              border: "2px solid #AA954F",
              boxShadow: "inset 0 0 0 2px #1c2230, 0 8px 24px rgba(0,0,0,0.6)",
              borderRadius: "8px",
            }}
          >
            {/* Top HUD Bar da Coluna Direita */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1.5,
                py: 1,
                backgroundColor: "#151924",
                borderBottom: "2px solid #262c3d",
                fontFamily: "monospace",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: 8, height: 8, backgroundColor: "#ffc409", boxShadow: "0 0 6px #ffc409" }} />
                <Typography variant="caption" sx={{ fontFamily: "monospace", fontWeight: 700, color: "#f4f5f8", fontSize: "0.72rem" }}>
                  STATS_PANEL // SKILLS
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 0.8,
                  py: 0.1,
                  backgroundColor: "#0b0e17",
                  border: "1px solid #2dd36f",
                  color: "#2dd36f",
                  fontFamily: "monospace",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                }}
              >
                SENIOR_XP
              </Box>
            </Box>

            <Box sx={{ p: 2, flex: "1 1 auto", backgroundColor: "#121521", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box
                sx={{
                  p: 1.5,
                  mb: 2,
                  backgroundColor: "#0b0e17",
                  border: "1px solid #262c3d",
                  borderRight: "3px solid #ffc409",
                }}
              >
                <Typography
                  className='section-aboutme-name'
                  variant='subtitle1'
                  align='right'
                  sx={{ m: 0, fontSize: "0.85rem" }}
                >
                  Tempo de experiência
                </Typography>
                <Typography
                  align='right'
                  sx={{ m: 0, fontSize: '2.2rem', fontFamily: "monospace", fontWeight: 700, color: "#ffc409" }}
                  variant='body1'
                >
                  6+ anos
                </Typography>
              </Box>

              <Box>
                <Typography
                  align='right'
                  className='section-aboutme-name'
                  variant='subtitle1'
                  sx={{ mb: 1, fontSize: "0.9rem" }}
                >
                  Habilidades
                </Typography>
                <ul className='m-0 p-0 list-none space-y-1.5'>
                  <li>
                    <Typography
                      align='right'
                      variant={'body1'}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "#f4f5f8",
                        backgroundColor: "#0b0e17",
                        border: "1px solid #262c3d",
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "4px",
                      }}
                    >
                      Desenvolvimento Fullstack foco em Java
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      align='right'
                      variant={'body1'}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "#f4f5f8",
                        backgroundColor: "#0b0e17",
                        border: "1px solid #262c3d",
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "4px",
                      }}
                    >
                      Infraestrutura em Nuvem (AWS, Azure e GCP)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      align='right'
                      variant={'body1'}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "#f4f5f8",
                        backgroundColor: "#0b0e17",
                        border: "1px solid #262c3d",
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "4px",
                      }}
                    >
                      Metodologias Ageis Scrum e Kanban
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      align='right'
                      variant={'body1'}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "#f4f5f8",
                        backgroundColor: "#0b0e17",
                        border: "1px solid #262c3d",
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "4px",
                      }}
                    >
                      Configuração de Servidores
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      align='right'
                      variant={'body1'}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "#f4f5f8",
                        backgroundColor: "#0b0e17",
                        border: "1px solid #262c3d",
                        px: 1.2,
                        py: 0.6,
                        borderRadius: "4px",
                      }}
                    >
                      DevOps, GitOps e automação CI/CD
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>

            {/* Rodapé de Redes Sociais */}
            <Box
              sx={{
                px: 1.5,
                py: 1,
                backgroundColor: "#151924",
                borderTop: "2px solid #262c3d",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className='section-aboutme-name'
                variant='subtitle1'
                align='right'
                sx={{ m: 0, fontSize: "0.82rem" }}
              >
                Redes sociais
              </Typography>
              <Typography
                align='right'
                sx={{ m: 0, display: "flex", gap: 1 }}
                variant='body1'
                component="div"
              >
                <IconButton
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/marcos-henrique-santana/"
                  target="_blank"
                  size="small"
                  sx={{
                    color: "#ffc409",
                    border: "1px solid #38415e",
                    backgroundColor: "#1e2436",
                    borderRadius: "4px",
                    "&:hover": { color: "#00e1ff", borderColor: "#00e1ff", backgroundColor: "#283048" },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="github"
                  href="https://github.com/marcoshssilva"
                  target="_blank"
                  size="small"
                  sx={{
                    color: "#ffc409",
                    border: "1px solid #38415e",
                    backgroundColor: "#1e2436",
                    borderRadius: "4px",
                    "&:hover": { color: "#00e1ff", borderColor: "#00e1ff", backgroundColor: "#283048" },
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
