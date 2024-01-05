"use client";
import React from "react";

import { Box, Button, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { FormEvent } from "react";

import SendIcon from '@mui/icons-material/Send';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function HeaderContactMe() {

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [nomeError, setNomeError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [mensagemError, setMensagemError] = React.useState(false)

  async function onSubmitContactMe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Send event data: NAME=${nome} \tMAIL=${email} \tMESSAGE=${mensagem}`);
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <Box className={'h-full flex flex-col items-baseline w-full'}>
      <form className="m-0 w-full py-6" autoComplete="off" onSubmit={onSubmitContactMe}>
        <Typography variant="caption" className={'mb-6'}>
          Gostaria de entrar em contato comigo?
        </Typography>
        <Box sx={{ height: '16px' }} />
        <Box className={"grid grid-cols-2 gap-2 mb-6"}>
          <TextField
            label="Seu Nome"
            onChange={(e) => setNome(e.target.value)}
            required
            variant="filled"
            type="text"
            fullWidth
            value={nome}
            error={nomeError}
          />
          <TextField
            label="Seu Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="filled"
            type="email"
            value={email}
            error={emailError}
            fullWidth
          />
        </Box>
        <Box className={"grid grid-cols-1 gap-2 mb-6"}>
          <TextField
            label="Mensagem"
            onChange={(e) => setMensagem(e.target.value)}
            required
            multiline
            rows={5}
            variant="filled"
            value={mensagem}
            error={mensagemError}/>
        </Box>
        <Box className={"flex justify-end"}>
          <Button startIcon={<SendIcon />} variant="contained" type="submit">Envie-me uma mensagem</Button>
        </Box>
      </form>
    </Box>
    </ThemeProvider>
  );
}
