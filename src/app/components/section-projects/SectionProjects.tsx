'use client'
import React from "react";

import {
  Box,
  Container,
  Divider,
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

  return <>
    <Box component={'section'} id="section-projects" className="relative box-section background-projects">
      <Container className='min-h-screen pt-[97px]'>
        <Typography
          className='section-projects-title'
          variant='h2'
          align='left'
          sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}>
          #Meus Projetos
        </Typography>
        <Typography sx={{ marginX: '1.5rem', marginY: 0, padding: 0 }}>
          Uma coleção de projetos feitos por mim.
        </Typography>
        <ProjectGroupScrollarea>
          { projects.map((item, index) => <ProjectCard key={index} project={item} />) }
        </ProjectGroupScrollarea>
      </Container>
    </Box>
  </>
}
