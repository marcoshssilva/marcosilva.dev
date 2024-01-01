import { Box, Button, Typography } from '@mui/material';

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function HeaderGroupButtonsComponent() {
    return <>
        <Box className={'pt-6 pb-3'}>
          <Typography>
            Siga-me pelas redes sociais:
          </Typography>
        </Box>
        <Box className={'flex gap-3'}>
          <Button
          variant="outlined"
          startIcon={ <GitHubIcon /> }
          href="https://github.com/marcoshssilva"
          size="large"
          target="_blank">GitHub</Button>

          <Button
          variant="outlined"
          startIcon={ <LinkedInIcon /> }
          href="https://www.linkedin.com/in/marcos-henrique-santana/"
          size="large"
          target="_blank">LinkedIn</Button>
        </Box>
        </>
}
