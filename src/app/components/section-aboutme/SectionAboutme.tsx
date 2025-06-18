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
  return <>
    <Box component={'section'} id="section-aboutme" className="relative box-section background-aboutme">
      <Container className='min-h-screen pt-[97px]'>
        <Typography
          className='section-aboutme-title'
          variant='h2'
          align='left'
          sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
        >
          #Sobre Mim
        </Typography>
        <Box className='grid grid-cols-1'>
          <Typography
            className='section-aboutme-name'
            variant='h3'
            align='left'
            sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
          >
            Marcos Henrique
          </Typography>
        </Box>
        <Box
          className='grid grid-cols-12'
        >

          <Box className='col-span-12 lg:col-span-4'>
            <Typography
              className='section-aboutme-name'
              variant='subtitle1'
              align='left'
              sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
            >
              Biografia
            </Typography>
            <Typography
              sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              variant='body1'
              align='justify'
            >
              Sou um profissional de Tecnologia da Informação com experiência no desenvolvimento de software para plataformas web, microserviços, cloud e mobile.
            </Typography>
            <Typography
              sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              variant='body1'
              align='justify'
            >
              Minha trajetória combina atuação técnica e entrega de projetos alinhados às necessidades estratégicas dos negócios, utilizando práticas modernas e metodologias ágeis.
            </Typography>
            <Typography
              sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              variant='body1'
              align='justify'
            >
              Mantenho-me atualizado com as tendências tecnológicas e me dedico a construir soluções que agreguem valor ao mercado.
            </Typography>
            <Typography
              sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              variant='body1'
              align='justify'
            >
              Tenho compromisso profissional em consolidar meu perfil como um profissional versátil, preparado para desafios.
            </Typography>
          </Box>

          <Box className='col-span-12 md:col-span-6 lg:col-span-4 relative'>
            <Box className={'box-image translate-y-[-50%] translate-x-[-50%] lg:translate-x-[-35%]'}>
                <Box className={'box-content'}>
                  <Image
                    src='/images/me/me.jpeg'
                    width={200}
                    height={200}
                    alt={'profile-aboutme'}
                  />
                  {/* Gostaria de usar emojis? Acesse: https://emojipedia.org/ */}
                  <span>🤖</span>
                  <p>
                    Marcos Henrique
                    <br/>
                    <span>Desenvolvedor Fullstack</span>
                  </p>
                  <a href="#">Contrate-me</a>
                </Box>
            </Box>
          </Box>

          <Box className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col'>
            <Box>
              <Typography
                className='section-aboutme-name'
                variant='subtitle1'
                align='right'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              >
                Tempo de experiência
              </Typography>
              <Typography
                align='right'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem', fontSize: '2.5rem' }}
                variant='body1'
              >
                5+
              </Typography>
            </Box>

            <Box>
              <Typography
                align='right'
                className='section-aboutme-name'
                variant='subtitle1'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              >
                Habilidades
              </Typography>
              <Typography
                align='right'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
                variant='body1'
              >
                <ul className=''>
                  <li className='text-right'>
                    Infraestrutura em Nuvem
                  </li>
                  <li className=''>
                    Desenvolvimento Fullstack
                  </li>
                  <li className=''>
                    Administração de Servidores
                  </li>
                  <li className=''>
                    DevOps e GitOps
                  </li>
                  <li className=''>
                    Metodologias Ageis
                  </li>
                </ul>
              </Typography>
            </Box>

            <Box>
            <Typography
                className='section-aboutme-name'
                variant='subtitle1'
                align='right'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
              >
                Redes sociais
              </Typography>
              <Typography
                align='right'
                sx={{ marginTop: '1.2rem', marginBottom: '1rem', marginX: '1rem' }}
                variant='body1'
              >
                <IconButton
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/marcos-henrique-santana/"
                  target="_blank"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="github"
                  href="https://github.com/marcoshssilva"
                  target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  </>
}
