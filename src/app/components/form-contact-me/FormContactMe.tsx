"use client";
import React, { FormEvent } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { sendContactMeGetFormDataAction } from "@/app/actions/sendContactMeGetFormDataAction";
import { ContactFormEventDetail, FormHudStatus } from "@/app/types";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const retroTextFieldSx = {
  "& .MuiFilledInput-root": {
    backgroundColor: "#0b0e17",
    border: "2px solid #262c3d",
    borderRadius: "4px",
    fontFamily: "monospace",
    color: "#f4f5f8",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      backgroundColor: "#0e121d",
      borderColor: "#AA954F",
    },
    "&.Mui-focused": {
      backgroundColor: "#0b0e17",
      borderColor: "#00e1ff",
      boxShadow: "0 0 10px rgba(0, 225, 255, 0.22)",
    },
    "&.Mui-error": {
      borderColor: "#eb445a",
      boxShadow: "0 0 8px rgba(235, 68, 90, 0.25)",
    },
    "&::before, &::after": {
      display: "none",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "monospace",
    color: "#92949c",
    fontSize: "0.85rem",
    letterSpacing: "0.04em",
    "&.Mui-focused": {
      color: "#ffc409",
    },
    "&.Mui-error": {
      color: "#eb445a",
    },
  },
  "& .MuiFilledInput-input": {
    fontFamily: "monospace",
    fontSize: "0.88rem",
  },
};

function getFormHudStatus(
  showAlert: boolean,
  hasError: boolean,
  isTyping: boolean
): FormHudStatus {
  if (showAlert) {
    return { label: "PACOTE ENVIADO!", color: "#2dd36f" };
  }
  if (isTyping) {
    return { label: "DIGITANDO...", color: "#ffca22" };
  }
  if (hasError) {
    return { label: "CAMPOS PENDENTES", color: "#eb445a" };
  }
  return { label: "AGUARDANDO INPUT", color: "#00e1ff" };
}

function emitFormSync(detail: ContactFormEventDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<ContactFormEventDetail>("contact-form-sync", { detail }));
  }
}

export default function FormContactMe() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [nomeError, setNomeError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [mensagemError, setMensagemError] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  async function handleCloseAlert() {
    setShowAlert(false);
    emitFormSync({
      nome,
      email,
      mensagem,
      hasError: nomeError || emailError || mensagemError,
      isSuccess: false,
    });
  }

  async function validateForm(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      setEmailError(true);
      setMensagemError(true);
      setNomeError(true);
      emitFormSync({
        nome,
        email,
        mensagem,
        hasError: true,
        isSuccess: showAlert,
      });
    }
    return form.checkValidity();
  }

  async function validateFieldNome(
    input?: HTMLInputElement | HTMLTextAreaElement,
    refreshValue: boolean = false
  ) {
    let currentNome = nome;
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      currentNome = input.value;
      setNome(currentNome);
    }
    const condition = nome.trim().length < 3;
    setNomeError(condition);
    emitFormSync({
      nome: currentNome,
      email,
      mensagem,
      hasError: condition || emailError || mensagemError,
      isSuccess: showAlert,
    });
  }

  async function validateFieldEmail(
    input?: HTMLInputElement | HTMLTextAreaElement,
    refreshValue: boolean = false
  ) {
    let currentEmail = email;
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      currentEmail = input.value;
      setEmail(currentEmail);
    }
    const condition = email.trim().length < 6 && !emailRegex.test(email);
    setEmailError(condition);
    emitFormSync({
      nome,
      email: currentEmail,
      mensagem,
      hasError: nomeError || condition || mensagemError,
      isSuccess: showAlert,
    });
  }

  async function validateFieldMensagem(
    input?: HTMLInputElement | HTMLTextAreaElement,
    refreshValue: boolean = false
  ) {
    let currentMensagem = mensagem;
    if (refreshValue && input) {
      input.value = input.value.trimStart();
      currentMensagem = input.value;
      setMensagem(currentMensagem);
    }
    const condition = mensagem.trim().length < 2;
    setMensagemError(condition);
    emitFormSync({
      nome,
      email,
      mensagem: currentMensagem,
      hasError: nomeError || emailError || condition,
      isSuccess: showAlert,
    });
  }

  async function onSubmitContactMe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validForm = await validateForm(event.currentTarget);
    if (validForm) {
      sendContactMeGetFormDataAction(nome, email, mensagem).then(() => {
        setShowAlert(true);
        emitFormSync({
          nome,
          email,
          mensagem,
          hasError: false,
          isSuccess: true,
        });
      });
    }
  }

  const hasError = nomeError || emailError || mensagemError;
  const isTyping = Boolean(nome.trim() || email.trim() || mensagem.trim());
  const formHud = getFormHudStatus(showAlert, hasError, isTyping);

  return (
    <form
      noValidate
      className="col-span-1 m-0 w-full flex flex-col justify-between overflow-hidden"
      autoComplete="off"
      onSubmit={onSubmitContactMe}
      style={{
        backgroundColor: "#0d1017",
        border: "2px solid #AA954F",
        boxShadow: "inset 0 0 0 2px #1c2230, 0 8px 24px rgba(0,0,0,0.6)",
        borderRadius: "8px",
      }}
    >
      {/* Top HUD Bar do Formulário (aderente ao PixelDevCard) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1.5,
          py: 1,
          backgroundColor: "#151924",
          borderBottom: "2px solid #262c3d",
          fontFamily: "monospace",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: formHud.color,
              boxShadow: `0 0 6px ${formHud.color}`,
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#f4f5f8",
              letterSpacing: "0.06em",
              fontSize: "0.72rem",
            }}
          >
            MSG_TERMINAL // CONTATO.SH
          </Typography>
        </Box>

        <Box
          sx={{
            px: 1,
            py: 0.2,
            backgroundColor: "#0d1017",
            border: `1px solid ${formHud.color}`,
            color: formHud.color,
            fontFamily: "monospace",
            fontSize: "0.65rem",
            fontWeight: 700,
          }}
        >
          {formHud.label}
        </Box>
      </Box>

      {/* Corpo do Formulário em estilo Terminal Retrô */}
      <Box
        sx={{
          p: 2.5,
          flex: "1 1 auto",
          backgroundColor: "#121521",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0b0e17",
            border: "1px solid #262c3d",
            borderLeft: "3px solid #ffc409",
            px: 1.5,
            py: 1,
            mb: 2.5,
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
            variant="caption"
            sx={{
              fontFamily: "monospace",
              color: "#f4f5f8",
              fontSize: "0.82rem",
              letterSpacing: "0.03em",
            }}
          >
            Gostaria de entrar em contato comigo?
          </Typography>
        </Box>

        <Box className={"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"}>
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
            sx={retroTextFieldSx}
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
            sx={retroTextFieldSx}
          />
        </Box>

        <Box className={"grid grid-cols-1 gap-2 mb-2"}>
          <TextField
            id="mensagem"
            label="Mensagem"
            onChange={(e) => validateFieldMensagem(e.target, true)}
            required
            multiline
            rows={8}
            variant="filled"
            value={mensagem}
            error={mensagemError}
            sx={retroTextFieldSx}
          />
        </Box>

        {showAlert && (
          <Box className={"mt-3"}>
            <Alert
              severity="success"
              onClose={handleCloseAlert}
              sx={{
                backgroundColor: "#0b0e17",
                color: "#2dd36f",
                border: "2px solid #2dd36f",
                fontFamily: "monospace",
                "& .MuiAlert-icon": { color: "#2dd36f" },
              }}
            >
              Muito obrigado pela sua mensagem.
              <br />
              Entraremos em contato.
            </Alert>
          </Box>
        )}
      </Box>

      {/* Rodapé do Formulário (alinhado com os controles da animação) */}
      <Box
        sx={{
          p: 1.5,
          backgroundColor: "#151924",
          borderTop: "2px solid #262c3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontFamily: "monospace",
            color: "#92949c",
            fontSize: "0.7rem",
            display: { xs: "none", sm: "inline" },
          }}
        >
          {`CHARS: ${mensagem.length} // UTF-8`}
        </Typography>

        <Button
          startIcon={<SendIcon />}
          variant="contained"
          type="submit"
          sx={{
            ml: "auto",
            backgroundColor: "#1e2436",
            color: "#ffc409",
            border: "2px solid #AA954F",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
            px: 2.5,
            py: 1,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#283048",
              borderColor: "#00e1ff",
              color: "#00e1ff",
              boxShadow: "0 0 12px rgba(0, 225, 255, 0.3)",
            },
          }}
        >
          Envie-me uma mensagem
        </Button>
      </Box>
    </form>
  );
}
