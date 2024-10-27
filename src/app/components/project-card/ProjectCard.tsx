import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import { ProjectCardDataProps } from "@/app/types";

export default function ProjectCard ({ project }: ProjectCardDataProps) {
  return <>
    <Box
      className='project-card h-full relative hover:border-yellow-200 hover:border hover:-translate-y-[3px] transition-all duration-200 hover:shadow-lg'
      sx={{
        backgroundColor: 'var(--color-black-tint)',
        padding: '1rem',
        borderRadius: '16px'
    }}>
      <Typography variant='h6' className='project-card-title'>
        { project.title }
      </Typography>
      <Typography>
        { project.description }
      </Typography>
      <Box className='project-card-tags pb-8'>
        { project.tags.map((tag, index) => <span key={index} className='project-card-tag'> {tag} </span>) }
      </Box>
      <Box className='my-4 absolute bottom-0'>
        { project.links.map((link, index) => <IconButton
          key={index}
          target='_blank'
          href={link.href}>
          <ProjectCardButtonIcon icon={link.icon} />
        </IconButton>) }
      </Box>
    </Box>
  </>
}

function ProjectCardButtonIcon({ icon }: { icon: string }) {
  switch (icon){
    case 'github':
      return (<GitHubIcon />)
    default:
      return (<LanguageIcon />)
  }
}
