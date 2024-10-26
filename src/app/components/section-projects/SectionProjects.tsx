'use client'
import React from "react";

import {
  Box,
  Container,
  Divider,
  Typography
} from "@mui/material";

import {
  GitHubProject
} from "@/app/types";

import ProjectCard from "@/app/components/project-card/ProjectCard";
import ProjectGroupScrollarea from "@/app/components/project-group-scrollarea/ProjectGroupScrollarea";

export default function SectionProjects() {
  const projects: GitHubProject[] = [
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/MHPasswordManager' }],
      tags: ['Java', 'Spring Boot', 'Spring Cloud', 'OAuth2', 'RabbitMQ', 'Postgres', 'Mongo', 'Redis'],
      title: 'MHPasswordManager',
      description: 'Conjunto de aplicações para armazenar e criptografar senhas e arquivos utilizando par de chaves e validações'
    },
    {
      links: [{ icon: 'github', href: 'https://github.com/marcoshssilva/MHPasswordManager' }],
      tags: ['Java', 'SpringBoot', 'Azure', 'OpenAI', 'Spring AI Experimental'],
      title: 'Azure Client-AI',
      description: 'Serviço API REST que comunica com modelos do serviço Azure OpenAI e permite geração de imagens e prompts'
    },
  ];

  return <>
    <Box component={'section'} id="section-projects" className="relative box-section background-projects">
      <Container className='min-h-screen pt-[97px]'>
        <Typography
          variant='h3'
          align='left'
          sx={{ margin: '1rem' }}>
          # Meus Projetos
        </Typography>
        <Typography sx={{ marginX: '1.5rem' }}>
          Uma coleção de projetos feitos por mim.
        </Typography>
        <ProjectGroupScrollarea>
          { projects.map((item, index) => <ProjectCard key={index} project={item} />) }
        </ProjectGroupScrollarea>
      </Container>
    </Box>
  </>
}
