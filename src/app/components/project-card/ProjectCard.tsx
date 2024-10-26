import {
  Box,
  Typography
} from "@mui/material";

import { ProjectCardDataProps } from "@/app/types";

export default function ProjectCard ({ project }: ProjectCardDataProps) {
  return <>
    <Box
      className='project-card'
      sx={{
        minWidth: { xs: '15rem' },
        maxWidth: { xs: '20rem' },
        backgroundColor: 'var(--color-black-tint)',
        padding: '1rem',
        borderRadius: '16px'
    }}>
      {/*<Box sx={{ backgroundColor: '#00cec9', borderRadius: '16px' }}>*/}
      {/*  <svg viewBox="0 0 200 200" width="100%" height="100%">*/}
      {/*    <circle cx="100" cy="100" r="80" fill="#00cec9"></circle>*/}
      {/*    <circle cx="100" cy="100" r="60" fill="#2d3436"></circle>*/}
      {/*    <circle cx="100" cy="100" r="40" fill="#fd79a8"></circle>*/}
      {/*  </svg>*/}
      {/*</Box>*/}
      <Typography variant='h6' className='project-card-title'>
        { project.title }
      </Typography>
      <Typography>
        { project.description }
      </Typography>
      <Box className='project-card-tags'>
        { project.tags.map((tag, index) => <span key={index} className='project-card-tag'> {tag} </span>) }
      </Box>
      {/*<Box>*/}
      {/*  { project.links.map((link, index) => <a key={index} target='_blank' href={link.href}> {link.icon} </a>) }*/}
      {/*</Box>*/}
    </Box>
  </>
}
