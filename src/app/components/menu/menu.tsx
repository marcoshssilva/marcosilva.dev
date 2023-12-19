"use client";

import { useState } from "react";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MenuComponent() {
  const [endSiteUrl, setEndSiteUrl] = useState("marcoshssilva");
  const [countLettersUrl, setCountLettersUrl] = useState(2);
  const [goLeftLettersUrl, setGoLeftLettersUrl] = useState(true);
  const [pauseLettersUrl, setPauseLettersUrl] = useState(false);

  const timer = setTimeout(() => {

      if (countLettersUrl === 14) {
        setGoLeftLettersUrl(false)
        setPauseLettersUrl(true)
        setInterval(() => setPauseLettersUrl(false), 2700)
      }

      if (countLettersUrl === 1) {
        setGoLeftLettersUrl(true)
        setPauseLettersUrl(true)
        setInterval(() => setPauseLettersUrl(false), 300)
      }

      if (!pauseLettersUrl) {
        setCountLettersUrl(goLeftLettersUrl ? countLettersUrl + 1 : countLettersUrl - 1);
        setEndSiteUrl("marcoshssilva".substring(0, countLettersUrl));
      }
      
  }, 145);

  return (
    <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="a" href="/">
            marcoshssilva
          </Typography>
          <Typography variant="h6" component="a" href="/" color='primary'>
            .com.br
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>

          <IconButton
            size="large"
            aria-label="Redirect to LinkedIn"
            color="inherit"
            target="_blank"
            href="https://www.linkedin.com/in/marcos-henrique-santana/">
                <LinkedInIcon />
          </IconButton>

          <IconButton
            size="large"
            aria-label="Redirect to Github"
            color="inherit"
            target="_blank"
            href="https://github.com/marcoshssilva">
                <GitHubIcon />
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
