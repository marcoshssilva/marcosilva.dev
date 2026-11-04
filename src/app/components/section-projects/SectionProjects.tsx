'use client'
import React from "react";

import {
  Box,
  Container,
  Typography
} from "@mui/material";

import {
  ProjectData
} from "@/app/types";

import ProjectCard from "@/app/components/project-card/ProjectCard";
import ProjectGroupScrollarea from "@/app/components/project-group-scrollarea/ProjectGroupScrollarea";

export default function SectionProjects() {
  const projects: ProjectData[] = [
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/MHPasswordManager' }],
      tags: ['Spring Boot', 'Spring Cloud', 'OAuth2', 'RabbitMQ', 'Postgres', 'Mongo', 'Redis'],
      title: 'MHPasswordManager',
      description: 'Conjunto de aplicações para armazenar e criptografar senhas e arquivos utilizando par de chaves e validações'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/client-ai' }],
      tags: ['SpringBoot', 'Azure', 'OpenAI', 'Spring AI'],
      title: 'Azure Client-AI',
      description: 'Serviço API REST que comunica com modelos do serviço Azure OpenAI e permite geração de imagens e prompts'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/app-registranotas-react-native' }],
      tags: ['React Native', 'Android', 'Firebase', 'Google Auth'],
      title: 'AppRegistra Notas',
      description: 'Aplicativo mobile para guardar notas de forma sincronizada em nuvem utilizando Firebase e autenticador Google'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/global-library' }],
      tags: ['Groovy', 'Jenkins CI/CD'],
      title: 'Global-Library',
      description: 'Conjunto de funções escritas em Groovy script para Jenkins'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/nexus3-kubernetes' }],
      tags: ['Helm', 'Kubernetes'],
      title: 'Nexus3 Helm',
      description: 'Helm para facilitar deploy do Nexus3 Artifact Registry em ambiente Kubernetes'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/docker-jenkins-agent' }],
      tags: ['Docker'],
      title: 'Docker Jenkins Agent',
      description: 'Container editado com Docker CLI pré-instalado, ambos, SSH Agent e Inbound Agent'
    },
  ];

  return (
    <Box
      component={'section'}
      id="section-projects"
      className="relative box-section background-projects contact-section-screen-frame"
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
            SYS://MARCOSILVA.DEV/MEUS-PROJETOS
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
          {"[REPOSITÓRIOS // GIT_LOG]"}
        </Typography>
      </Box>

      <Container className='py-[48px] px-4'>
        {/* Cabeçalho Estilizado #Meus Projetos em estilo Retro HUD */}
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
                {"[SECTION_01 // PORTFOLIO_REPOS]"}
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
                className='section-projects-title'
                variant='h2'
                align='left'
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                  lineHeight: 1.1,
                  m: 0,
                }}
              >
                #Meus Projetos
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
              {`TOTAL: ${projects.length} PROJETOS ATIVOS`}
            </Typography>
          </Box>
        </Box>

        {/* Subtítulo em estilo Prompt de Terminal */}
        <Box
          sx={{
            backgroundColor: "#0b0e17",
            border: "1px solid #262c3d",
            borderLeft: "3px solid #ffc409",
            px: 2,
            py: 1.2,
            mx: 2,
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "monospace",
              color: "#ffc409",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            {">_"}
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              color: "#f4f5f8",
              fontSize: "0.85rem",
              m: 0,
              p: 0,
            }}
          >
            Aqui estão alguns dos meus projetos mais recentes. Você pode ver mais detalhes e o código fonte acessando os links.
          </Typography>
        </Box>

        <ProjectGroupScrollarea>
          { projects.map((item, index) => <ProjectCard key={index} project={item} />) }
        </ProjectGroupScrollarea>
      </Container>
    </Box>
  );
}
