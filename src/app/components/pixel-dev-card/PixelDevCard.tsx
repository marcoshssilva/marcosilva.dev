"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";

export type PixelActivity =
  | "coding"
  | "coffee"
  | "server"
  | "listening"
  | "celebrating"
  | "alert";

export interface PixelDevCardProps {
  nome?: string;
  email?: string;
  mensagem?: string;
  hasError?: boolean;
  isSuccess?: boolean;
}

const ROUTINE_CYCLE: PixelActivity[] = ["coding", "coding", "coffee", "coding", "server"];

const ACTIVITY_LABELS: Record<PixelActivity, { badge: string; color: string }> = {
  coding: { badge: "CODANDO", color: "#00e1ff" },
  coffee: { badge: "CAFEZINHO", color: "#ffc409" },
  server: { badge: "DEVOPS // OK", color: "#2dd36f" },
  listening: { badge: "ONLINE // ESCUTANDO", color: "#ffca22" },
  celebrating: { badge: "MENSAGEM ENVIADA!", color: "#2dd36f" },
  alert: { badge: "ATENÇÃO NO FORM", color: "#eb445a" },
};

function getSpeechText(
  activity: PixelActivity,
  activeField: "none" | "nome" | "email" | "mensagem",
  nome: string,
  customMessage: string | null
): string {
  if (customMessage) return customMessage;
  switch (activity) {
    case "celebrating":
      return "Boa!! Recebi sua mensagem aqui no servidor! Já já te respondo! 🚀";
    case "alert":
      return "Ops! Faltou preencher algum campo obrigatório ali no formulário 👉";
    case "listening": {
      const firstName = nome.trim().split(" ")[0];
      switch (activeField) {
        case "nome":
          return firstName
            ? `Opa, prazer em te conhecer, ${firstName}! 👋`
            : "Opa! Como posso te chamar? 👀";
        case "email":
          return "Anotando seu e-mail aqui no terminal... 📬";
        default:
          return "Tô lendo sua mensagem! Pode escrever à vontade ✍️";
      }
    }
    case "coffee":
      return "Pausa estratégica pro café ☕ Sem café, sem deploy em produção!";
    case "server":
      return "Monitorando os clusters Cloud & pipelines CI/CD... Tudo verde! 🟢";
    default:
      return "Codando microsserviços e arquitetura Cloud... Manda um oi aí do lado! 💻";
  }
}

export default function PixelDevCard({
  nome: propNome = "",
  email: propEmail = "",
  mensagem: propMensagem = "",
  hasError: propHasError = false,
  isSuccess: propIsSuccess = false,
}: Readonly<PixelDevCardProps>) {
  const [frame, setFrame] = useState(0);
  const [routineIndex, setRoutineIndex] = useState(0);
  const [manualActivity, setManualActivity] = useState<PixelActivity | null>(null);
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [coffeeCount, setCoffeeCount] = useState(3);
  const [commitCount, setCommitCount] = useState(42);
  const [syncedForm, setSyncedForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
    hasError: false,
    isSuccess: false,
  });

  const nome = propNome || syncedForm.nome;
  const email = propEmail || syncedForm.email;
  const mensagem = propMensagem || syncedForm.mensagem;
  const hasError = propHasError || syncedForm.hasError;
  const isSuccess = propIsSuccess || syncedForm.isSuccess;

  // Escuta eventos disparados pelo componente FormContactMe
  useEffect(() => {
    const handleFormSync = (event: Event) => {
      const customEvent = event as CustomEvent<{
        nome: string;
        email: string;
        mensagem: string;
        hasError: boolean;
        isSuccess: boolean;
      }>;
      if (customEvent.detail) {
        setSyncedForm(customEvent.detail);
      }
    };
    window.addEventListener("contact-form-sync", handleFormSync);
    return () => window.removeEventListener("contact-form-sync", handleFormSync);
  }, []);

  // Animação principal em loop (estilo 8-bit/16-bit frame tick)
  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 24);
    }, 350);
    return () => clearInterval(frameTimer);
  }, []);

  // Alternância automática da rotina de Home Office
  useEffect(() => {
    const routineTimer = setInterval(() => {
      setRoutineIndex((prev) => (prev + 1) % ROUTINE_CYCLE.length);
    }, 5500);
    return () => clearInterval(routineTimer);
  }, []);

  const resolveActiveField = (): "none" | "nome" | "email" | "mensagem" => {
    if (mensagem.trim().length > 0) return "mensagem";
    if (email.trim().length > 0) return "email";
    if (nome.trim().length > 0) return "nome";
    return "none";
  };

  const activeField = resolveActiveField();

  const resolveActivity = (): PixelActivity => {
    if (isSuccess) return "celebrating";
    if (manualActivity) return manualActivity;
    if (activeField !== "none") return "listening";
    if (hasError) return "alert";
    return ROUTINE_CYCLE[routineIndex];
  };

  const currentActivity = resolveActivity();
  const statusInfo = ACTIVITY_LABELS[currentActivity];
  const speechText = getSpeechText(currentActivity, activeField, nome, customMessage);

  const triggerAction = (act: PixelActivity, message: string) => {
    setManualActivity(act);
    setCustomMessage(message);
    if (act === "coffee") setCoffeeCount((c) => c + 1);
    if (act === "celebrating") setCommitCount((c) => c + 1);
    setTimeout(() => {
      setManualActivity(null);
      setCustomMessage(null);
    }, 4000);
  };

  const isBlinking = frame % 11 === 0;
  const isTypingStep = frame % 2 === 0;
  const codeScrollOffset = frame % 4;
  const steamOffset = frame % 3;

  return (
    <Card
      data-testid="pixel-dev-card"
      className="w-full h-full relative overflow-hidden flex flex-col justify-between select-none"
      sx={{
        backgroundColor: "#0d1017",
        border: "2px solid #AA954F",
        boxShadow: "inset 0 0 0 2px #1c2230, 0 8px 24px rgba(0,0,0,0.6)",
        borderRadius: "8px",
        minHeight: { xs: "380px", md: "460px" },
        p: 0,
      }}
    >
      {/* Top Retro HUD Bar */}
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
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: statusInfo.color,
              boxShadow: `0 0 6px ${statusInfo.color}`,
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
            MARCOS.DEV // HOME_OFFICE
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "monospace",
              color: "#ffc409",
              fontSize: "0.68rem",
              display: { xs: "none", sm: "inline" },
            }}
          >
            ☕x{coffeeCount} | GIT:{commitCount}
          </Typography>
          <Box
            sx={{
              px: 1,
              py: 0.2,
              backgroundColor: "#0d1017",
              border: `1px solid ${statusInfo.color}`,
              color: statusInfo.color,
              fontFamily: "monospace",
              fontSize: "0.65rem",
              fontWeight: 700,
            }}
          >
            {statusInfo.badge}
          </Box>
        </Box>
      </Box>

      {/* Pixel Art 2D Viewport (sempre preso dentro da caixa) */}
      <Box
        onClick={() =>
          triggerAction("listening", "Opa! Clicou no meu escritório 8-bit! Tudo certo por aí? 😄")
        }
        sx={{
          position: "relative",
          flex: "1 1 auto",
          width: "100%",
          overflow: "hidden",
          cursor: "pointer",
          backgroundColor: "#121521",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 160 112"
          preserveAspectRatio="xMidYMid slice"
          shapeRendering="crispEdges"
          style={{
            width: "100%",
            height: "100%",
            imageRendering: "pixelated",
            display: "block",
          }}
          role="img"
          aria-label="Boneco 2D Pixel Art do Marcos Henrique no Home Office"
        >
          {/* === PAREDE DO ESCRITÓRIO === */}
          <rect x="0" y="0" width="160" height="84" fill="#121521" />
          <rect x="0" y="20" width="160" height="1" fill="#171b2a" />
          <rect x="0" y="42" width="160" height="1" fill="#171b2a" />
          <rect x="0" y="64" width="160" height="1" fill="#171b2a" />
          {/* Rodapé e piso */}
          <rect x="0" y="80" width="160" height="4" fill="#23283b" />
          <rect x="0" y="84" width="160" height="28" fill="#0c0e16" />

          {/* === JANELA NOTURNA (Esquerda) === */}
          <rect x="8" y="10" width="38" height="44" fill="#32394f" />
          <rect x="10" y="12" width="34" height="40" fill="#080b16" />
          {/* Lua pixelada */}
          <rect x="34" y="16" width="5" height="5" fill="#ffe875" />
          <rect x="33" y="16" width="2" height="3" fill="#080b16" />
          {/* Estrelas piscando */}
          <rect x="14" y="16" width="1" height="1" fill={frame % 2 === 0 ? "#ffffff" : "#4a5370"} />
          <rect x="24" y="19" width="1" height="1" fill={frame % 3 === 0 ? "#00e1ff" : "#ffffff"} />
          <rect x="18" y="25" width="1" height="1" fill={frame % 4 === 0 ? "#ffc409" : "#4a5370"} />
          {/* Prédios ao fundo (inspirado na foto do perfil) */}
          <rect x="11" y="34" width="8" height="18" fill="#141c33" />
          <rect x="13" y="36" width="2" height="2" fill="#ffd15c" />
          <rect x="13" y="40" width="2" height="2" fill="#ffd15c" />
          <rect x="19" y="30" width="10" height="22" fill="#1b2542" />
          <rect x="21" y="33" width="2" height="2" fill="#00e1ff" />
          <rect x="25" y="33" width="2" height="2" fill="#ffd15c" />
          <rect x="21" y="38" width="2" height="2" fill="#ffd15c" />
          <rect x="29" y="37" width="14" height="15" fill="#13192e" />
          <rect x="32" y="40" width="2" height="2" fill="#ffd15c" />
          <rect x="37" y="42" width="2" height="2" fill="#ffd15c" />
          {/* Grade da janela */}
          <rect x="26" y="12" width="2" height="40" fill="#32394f" />
          <rect x="10" y="31" width="34" height="2" fill="#32394f" />
          <rect x="6" y="53" width="42" height="3" fill="#4a5370" />

          {/* === PRATELEIRA GEEK / LIVROS / PLANTA === */}
          <rect x="54" y="22" width="46" height="3" fill="#7a4e2d" />
          <rect x="54" y="24" width="46" height="1" fill="#4d301a" />
          {/* Livros coloridos (cores do tema) */}
          <rect x="57" y="14" width="4" height="8" fill="#3880ff" />
          <rect x="61" y="15" width="4" height="7" fill="#eb445a" />
          <rect x="65" y="13" width="5" height="9" fill="#ffc409" />
          {/* Troféu / Café Java */}
          <rect x="75" y="16" width="6" height="6" fill="#ffc409" />
          <rect x="76" y="14" width="4" height="2" fill="#ffca22" />
          {/* Vaso com plantinha pixelada */}
          <rect x="88" y="18" width="6" height="4" fill="#c86432" />
          <rect x="89" y="14" width="4" height="4" fill="#2dd36f" />
          <rect x="87" y="15" width="2" height="3" fill="#28ba62" />
          <rect x="93" y="15" width="2" height="3" fill="#28ba62" />

          {/* === RACK DE SERVIDORES CLOUD (Direita) === */}
          <rect x="114" y="12" width="38" height="70" fill="#1e222e" />
          <rect x="116" y="14" width="34" height="66" fill="#10131a" />
          {/* Topo do Servidor */}
          <rect x="118" y="16" width="12" height="2" fill="#3880ff" />
          <rect x="142" y="16" width="4" height="2" fill="#2dd36f" />
          {/* 5 Blades de Servidor com LEDs piscantes */}
          {[22, 32, 42, 52, 62].map((bladeY, idx) => {
            const ledOn = (frame + idx) % 3 !== 0;
            let ledColor = "#2dd36f";
            if (currentActivity === "alert") {
              ledColor = "#eb445a";
            } else if (idx % 2 === 0) {
              ledColor = "#00e1ff";
            }
            return (
              <g key={bladeY}>
                <rect x="118" y={bladeY} width="30" height="7" fill="#232838" />
                <rect x="120" y={bladeY + 2} width="14" height="3" fill="#121521" />
                <rect
                  x="138"
                  y={bladeY + 2}
                  width="2"
                  height="2"
                  fill={ledOn ? ledColor : "#1b2b22"}
                />
                <rect
                  x="143"
                  y={bladeY + 2}
                  width="2"
                  height="2"
                  fill={(frame + idx) % 2 === 0 ? "#ffc409" : "#3a3014"}
                />
              </g>
            );
          })}
          {/* Barra de tráfego Cloud no servidor */}
          <rect x="118" y="72" width="30" height="4" fill="#181c26" />
          <rect
            x="119"
            y="73"
            width={10 + ((frame * 3) % 18)}
            height="2"
            fill={currentActivity === "alert" ? "#eb445a" : "#00e1ff"}
          />

          {/* === CADEIRA GAMER / OFFICE === */}
          <rect x="61" y="36" width="34" height="38" fill="#232634" />
          <rect x="63" y="34" width="30" height="4" fill="#AA954F" />
          <rect x="63" y="38" width="30" height="34" fill="#191b26" />

          {/* === BONECO PIXEL ART: MARCOS HENRIQUE === */}
          {/* Pescoço e Camiseta Cinza Clara (igual à foto do perfil) */}
          <rect x="62" y="57" width="32" height="17" fill="#d4d7dd" />
          <rect x="62" y="57" width="4" height="17" fill="#b4b9c4" />
          <rect x="90" y="57" width="4" height="17" fill="#b4b9c4" />
          <rect x="72" y="54" width="12" height="5" fill="#dfa982" />
          {/* Gola da camiseta */}
          <rect x="71" y="57" width="14" height="2" fill="#9da3b0" />

          {/* Orelhas */}
          <rect x="64" y="41" width="2" height="5" fill="#dfa982" />
          <rect x="90" y="41" width="2" height="5" fill="#dfa982" />

          {/* Rosto / Cabeça */}
          <rect x="66" y="32" width="24" height="23" fill="#f2c29b" />
          {/* Sombreamento suave pixelado do rosto */}
          <rect x="66" y="48" width="24" height="7" fill="#e6b38a" />
          <rect x="68" y="54" width="20" height="2" fill="#dfa982" />

          {/* Cabelo Escuro Ondulado no Topo e Fade nas Laterais */}
          <rect x="66" y="28" width="24" height="6" fill="#171720" />
          <rect x="68" y="26" width="20" height="3" fill="#171720" />
          {/* Textura/Ondas do cabelo (inspirado na arte do header) */}
          <rect x="70" y="27" width="4" height="2" fill="#2c2d3d" />
          <rect x="77" y="27" width="5" height="2" fill="#2c2d3d" />
          <rect x="84" y="28" width="3" height="2" fill="#2c2d3d" />
          <rect x="65" y="31" width="2" height="9" fill="#171720" />
          <rect x="89" y="31" width="2" height="9" fill="#171720" />
          {/* Mecha sutil na testa */}
          <rect x="71" y="34" width="3" height="1" fill="#171720" />
          <rect x="81" y="34" width="4" height="1" fill="#171720" />

          {/* Sobrancelhas */}
          <rect
            x="69"
            y={currentActivity === "celebrating" ? 37 : 38}
            width="6"
            height="1"
            fill="#1c1c26"
          />
          <rect
            x="81"
            y={currentActivity === "celebrating" ? 37 : 38}
            width="6"
            height="1"
            fill="#1c1c26"
          />

          {/* Olhos Expressivos */}
          {currentActivity === "celebrating" ? (
            <>
              {/* Olhos felizes ^ ^ */}
              <rect x="70" y="41" width="4" height="1" fill="#171720" />
              <rect x="69" y="42" width="1" height="1" fill="#171720" />
              <rect x="74" y="42" width="1" height="1" fill="#171720" />
              <rect x="82" y="41" width="4" height="1" fill="#171720" />
              <rect x="81" y="42" width="1" height="1" fill="#171720" />
              <rect x="86" y="42" width="1" height="1" fill="#171720" />
            </>
          ) : isBlinking ? (
            <>
              <rect x="70" y="42" width="4" height="1" fill="#171720" />
              <rect x="82" y="42" width="4" height="1" fill="#171720" />
            </>
          ) : (
            <>
              {/* Olhos abertos (olham para o formulário à direita quando listening) */}
              <rect x="70" y="41" width="4" height="3" fill="#171720" />
              <rect
                x={currentActivity === "listening" ? 72 : 70}
                y="41"
                width="1"
                height="1"
                fill="#ffffff"
              />
              <rect x="82" y="41" width="4" height="3" fill="#171720" />
              <rect
                x={currentActivity === "listening" ? 84 : 82}
                y="41"
                width="1"
                height="1"
                fill="#ffffff"
              />
            </>
          )}

          {/* Nariz pixelado */}
          <rect x="77" y="43" width="2" height="4" fill="#d9a177" />

          {/* Sorriso Característico */}
          {currentActivity === "coffee" ? (
            <rect x="76" y="49" width="4" height="3" fill="#8f3d3d" />
          ) : (
            <>
              <rect x="72" y="49" width="12" height="3" fill="#9e4242" />
              <rect x="73" y="49" width="10" height="2" fill="#ffffff" />
              <rect x="71" y="48" width="1" height="1" fill="#c97a63" />
              <rect x="84" y="48" width="1" height="1" fill="#c97a63" />
            </>
          )}

          {/* === BRAÇOS E MÃOS ANIMADOS POR ESTADO === */}
          {currentActivity === "celebrating" && (
            <>
              {/* Braços levantados comemorando \o/ */}
              <rect x="56" y="42" width="6" height="16" fill="#d4d7dd" />
              <rect x="56" y="38" width="5" height="5" fill="#f2c29b" />
              <rect x="94" y="42" width="6" height="16" fill="#d4d7dd" />
              <rect x="95" y="38" width="5" height="5" fill="#f2c29b" />
            </>
          )}

          {currentActivity === "listening" && (
            <>
              {/* Braço esquerdo na mesa, direito acenando para o formulário */}
              <rect x="64" y="66" width="6" height="7" fill="#f2c29b" />
              <rect
                x={isTypingStep ? 95 : 97}
                y="45"
                width="5"
                height="14"
                fill="#d4d7dd"
              />
              <rect
                x={isTypingStep ? 95 : 98}
                y="40"
                width="5"
                height="5"
                fill="#f2c29b"
              />
            </>
          )}

          {currentActivity === "coffee" && (
            <>
              {/* Segurando a caneca de café perto do rosto */}
              <rect x="64" y="66" width="6" height="7" fill="#f2c29b" />
              <rect x="84" y="52" width="8" height="12" fill="#d4d7dd" />
              <rect x="81" y="49" width="5" height="5" fill="#f2c29b" />
              {/* Caneca na mão */}
              <rect x="75" y="47" width="6" height="7" fill="#eb445a" />
              <rect x="76" y="49" width="4" height="2" fill="#ffffff" />
              <rect x="76" y={43 - steamOffset} width="1" height="2" fill="#ffffff" />
              <rect x="79" y={42 - steamOffset} width="1" height="2" fill="#ffffff" />
            </>
          )}

          {(currentActivity === "coding" ||
            currentActivity === "server" ||
            currentActivity === "alert") && (
            <>
              {/* Mãos digitando alternadamente no teclado */}
              <rect
                x="67"
                y={isTypingStep ? 68 : 70}
                width="6"
                height="5"
                fill="#f2c29b"
              />
              <rect
                x="83"
                y={isTypingStep ? 70 : 68}
                width="6"
                height="5"
                fill="#f2c29b"
              />
            </>
          )}

          {/* === MESA HOME OFFICE E EQUIPAMENTOS === */}
          <rect x="6" y="74" width="148" height="6" fill="#7c4f2b" />
          <rect x="6" y="80" width="148" height="4" fill="#54341b" />
          <rect x="14" y="84" width="6" height="28" fill="#362010" />
          <rect x="140" y="84" width="6" height="28" fill="#362010" />

          {/* Patinho de Borracha (Rubber Duck Debugging) na esquerda da mesa */}
          <rect x="13" y="69" width="6" height="5" fill="#ffc409" />
          <rect x="15" y="66" width="4" height="3" fill="#ffc409" />
          <rect x="18" y="67" width="2" height="1" fill="#ff6b00" />
          <rect x="17" y="66" width="1" height="1" fill="#171720" />

          {/* Monitor Esquerdo (IDE com linhas de código animadas) */}
          <rect x="24" y="50" width="32" height="21" fill="#282d3e" />
          <rect x="26" y="52" width="28" height="17" fill="#0b101d" />
          <rect x="37" y="71" width="6" height="3" fill="#3a4158" />
          <rect x="33" y="73" width="14" height="1" fill="#4f5875" />
          {/* Linhas de código rolando */}
          <rect x="28" y={54 + codeScrollOffset} width="10" height="1" fill="#ff6b9d" />
          <rect x="30" y={57 + codeScrollOffset} width="16" height="1" fill="#00e1ff" />
          <rect x="30" y={60 + codeScrollOffset} width="12" height="1" fill="#2dd36f" />
          <rect x="28" y={63 + codeScrollOffset} width="18" height="1" fill="#ffc409" />

          {/* Teclado Mecânico com RGB */}
          <rect x="65" y="72" width="26" height="2" fill="#2b3042" />
          <rect
            x="66"
            y="74"
            width="24"
            height="1"
            fill={isTypingStep ? "#00e1ff" : "#ffc409"}
          />

          {/* Monitor Direito / Terminal */}
          <rect x="98" y="53" width="26" height="18" fill="#282d3e" />
          <rect x="100" y="55" width="22" height="14" fill="#090d16" />
          <rect x="108" y="71" width="6" height="3" fill="#3a4158" />
          <rect x="102" y="58" width="12" height="1" fill="#2dd36f" />
          <rect x="102" y="61" width="16" height="1" fill="#3880ff" />
          <rect
            x="102"
            y="64"
            width={6 + ((frame * 2) % 12)}
            height="2"
            fill={currentActivity === "celebrating" ? "#ffc409" : "#2dd36f"}
          />

          {/* Caneca de Café na Mesa (quando não está na mão) */}
          {currentActivity !== "coffee" && (
            <>
              <rect x="130" y="67" width="6" height="7" fill="#eb445a" />
              <rect x="131" y="69" width="4" height="2" fill="#ffffff" />
              <rect x="136" y="68" width="2" height="4" fill="#eb445a" />
              <rect x="132" y={63 - steamOffset} width="1" height="2" fill="#cbd5e1" />
              <rect x="134" y={61 - steamOffset} width="1" height="2" fill="#cbd5e1" />
            </>
          )}

          {/* === PARTÍCULAS PIXELADAS DE ESTADO === */}
          {currentActivity === "coding" && (
            <>
              {/* Símbolos de código flutuando enquanto digita */}
              <rect
                x={isTypingStep ? 58 : 56}
                y={44 - (frame % 4)}
                width="3"
                height="1"
                fill="#00e1ff"
              />
              <rect
                x={isTypingStep ? 96 : 98}
                y={42 - (frame % 3)}
                width="2"
                height="2"
                fill="#ffc409"
              />
            </>
          )}

          {currentActivity === "celebrating" && (
            <>
              {/* Confetes pixelados caindo dentro da caixa */}
              <rect x="20" y={(frame * 5) % 70} width="2" height="2" fill="#ffc409" />
              <rect x="48" y={(frame * 7 + 15) % 70} width="2" height="2" fill="#00e1ff" />
              <rect x="78" y={(frame * 6 + 8) % 30} width="2" height="2" fill="#2dd36f" />
              <rect x="106" y={(frame * 5 + 25) % 70} width="2" height="2" fill="#eb445a" />
              <rect x="136" y={(frame * 8 + 10) % 70} width="2" height="2" fill="#ffc409" />
            </>
          )}

          {currentActivity === "alert" && (
            <>
              {/* Ícone de exclamação (!) pixelado acima da cabeça */}
              <rect x="77" y="15" width="2" height="6" fill="#eb445a" />
              <rect x="77" y="23" width="2" height="2" fill="#eb445a" />
            </>
          )}
        </svg>
      </Box>

      {/* Balão de Fala Retrô 8-bit + Controles Interativos */}
      <Box
        sx={{
          p: 1.5,
          backgroundColor: "#151924",
          borderTop: "2px solid #262c3d",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0b0e17",
            border: "2px solid #AA954F",
            p: 1.2,
            mb: 1,
            minHeight: "54px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            data-testid="pixel-speech-bubble"
            sx={{
              fontFamily: "monospace",
              color: "#f4f5f8",
              fontSize: "0.78rem",
              lineHeight: 1.35,
            }}
          >
            <Box component="span" sx={{ color: "#ffc409", fontWeight: 700, mr: 1 }}>
              [Marcos]:
            </Box>
            {speechText}
          </Typography>
        </Box>

        {/* Botões de Interação Rápida */}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}>
          <Box
            component="button"
            type="button"
            onClick={() =>
              triggerAction(
                "coffee",
                "Hmm, cafezinho quente recarregado! Energia 100% para codar! ☕⚡"
              )
            }
            sx={{
              flex: 1,
              py: 0.6,
              px: 1,
              backgroundColor: "#1e2436",
              color: "#ffc409",
              border: "1px solid #38415e",
              fontFamily: "monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              cursor: "pointer",
              "&:hover": { backgroundColor: "#283048", borderColor: "#ffc409" },
            }}
          >
            ☕ Dar Café
          </Box>
          <Box
            component="button"
            type="button"
            onClick={() =>
              triggerAction(
                "celebrating",
                "Deploy em produção concluído com zero bugs! Pipeline verdinho! 🚀"
              )
            }
            sx={{
              flex: 1,
              py: 0.6,
              px: 1,
              backgroundColor: "#1e2436",
              color: "#2dd36f",
              border: "1px solid #38415e",
              fontFamily: "monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              cursor: "pointer",
              "&:hover": { backgroundColor: "#283048", borderColor: "#2dd36f" },
            }}
          >
            🚀 Deploy
          </Box>
          <Box
            component="button"
            type="button"
            onClick={() =>
              triggerAction(
                "listening",
                "Opa! Manda sua mensagem no formulário ao lado, vai ser um prazer conversar! 👋"
              )
            }
            sx={{
              flex: 1,
              py: 0.6,
              px: 1,
              backgroundColor: "#1e2436",
              color: "#00e1ff",
              border: "1px solid #38415e",
              fontFamily: "monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              cursor: "pointer",
              "&:hover": { backgroundColor: "#283048", borderColor: "#00e1ff" },
            }}
          >
            👋 Chamar
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
