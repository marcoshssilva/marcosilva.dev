"use client";
import React from "react";

import { Alert, Box, Button, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { FormEvent } from "react";

import SendIcon from '@mui/icons-material/Send';

import { sendContactMeGetFormDataAction } from "@/app/actions/sendContactMeGetFormDataAction";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function HeaderContactMe() {

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [nomeError, setNomeError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [mensagemError, setMensagemError] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false);

  async function handleCloseAlert() {
    setShowAlert(false);
  };

  async function validateForm(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      setEmailError(true);
      setMensagemError(true);
      setNomeError(true);
    }
    return form.checkValidity();
  }

  async function validateFieldNome(input?: HTMLInputElement | HTMLTextAreaElement, refreshValue: boolean = false) {
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      setNome(input.value);
    }
    const condition = nome.trim().length < 3;
    setNomeError(condition);
  }

  async function validateFieldEmail(input?: HTMLInputElement | HTMLTextAreaElement, refreshValue: boolean = false) {
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      setEmail(input.value);
    }
    const condition = email.trim().length < 6 && !emailRegex.test(email);
    setEmailError(condition);
  }

  async function validateFieldMensagem(input?: HTMLInputElement | HTMLTextAreaElement, refreshValue: boolean = false) {
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      setMensagem(input.value);
    }
    const condition = mensagem.trim().length < 2;
    setMensagemError(condition);
  }

  async function onSubmitContactMe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validForm = await validateForm(event.currentTarget);
    if (validForm) {
      sendContactMeGetFormDataAction(nome, email, mensagem)
        .then(() => {
          setShowAlert(true);
        });
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <Box className={'h-full flex flex-col items-baseline w-full'}>
      <form noValidate className="m-0 w-full py-6" autoComplete="off" onSubmit={onSubmitContactMe}>
        <Typography variant="caption" className={'mb-6'}>
          Gostaria de entrar em contato comigo?
        </Typography>
        <Box sx={{ height: '16px' }} />
        <Box className={"grid grid-cols-2 gap-2 mb-6"}>
          <TextField
            id="nome"
            label="Seu Nome"
            onChange={(e) => validateFieldNome(e.target, true)}
            required
            variant="filled"
            type="text"
            fullWidth
            value={nome}
            error={nomeError}
          />
          <TextField
            id="email"
            label="Seu Email"
            onChange={(e) => validateFieldEmail(e.target, true)}
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
            id="mensagem"
            label="Mensagem"
            onChange={(e) => validateFieldMensagem(e.target, true)}
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
        {showAlert && (
          <Box className={'my-4'}>
            <Alert severity="success" onClose={handleCloseAlert}>
              Muito obrigado pela sua mensagem.<br />Entraremos em contato.
            </Alert>
          </Box>
      )}
      </form>
    </Box>
    </ThemeProvider>
  );
}
