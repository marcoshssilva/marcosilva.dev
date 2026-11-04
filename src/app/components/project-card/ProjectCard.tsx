import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import { ProjectCardDataProps } from "@/app/types";

export default function ProjectCard({ project }: ProjectCardDataProps) {
  return (
    <Box
      className="project-card h-full relative flex flex-col justify-between overflow-hidden hover:-translate-y-[3px] transition-all duration-200"
      sx={{
        backgroundColor: "#0d1017",
        border: "2px solid #AA954F",
        boxShadow: "inset 0 0 0 2px #1c2230, 0 8px 24px rgba(0,0,0,0.6)",
        borderRadius: "8px",
        "&:hover": {
          borderColor: "#00e1ff",
          boxShadow: "inset 0 0 0 2px #262c3d, 0 0 16px rgba(0, 225, 255, 0.25)",
        },
      }}
    >
      {/* Top HUD Bar do Card */}
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
              backgroundColor: "#2dd36f",
              boxShadow: "0 0 6px #2dd36f",
            }}
          />
          <Typography
            variant="h6"
            className="project-card-title"
            sx={{
              fontSize: "0.92rem",
              m: 0,
            }}
          >
            {project.title}
          </Typography>
        </Box>
        <Box
          sx={{
            px: 0.8,
            py: 0.1,
            backgroundColor: "#0b0e17",
            border: "1px solid #38415e",
            color: "#92949c",
            fontFamily: "monospace",
            fontSize: "0.62rem",
          }}
        >
          REPO
        </Box>
      </Box>

      {/* Corpo do Card */}
      <Box
        sx={{
          p: 2,
          flex: "1 1 auto",
          backgroundColor: "#121521",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "0.82rem",
            color: "#f4f5f8",
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </Typography>

        <Box className="project-card-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-card-tag">
              {" "}
              {tag}{" "}
            </span>
          ))}
        </Box>
      </Box>

      {/* Rodapé do Card com Links */}
      <Box
        sx={{
          px: 1.5,
          py: 0.75,
          backgroundColor: "#151924",
          borderTop: "2px solid #262c3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "44px",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontFamily: "monospace",
            color: "#92949c",
            fontSize: "0.66rem",
          }}
        >
          {"SOURCE // LINK"}
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {project.links.map((link, index) => (
            <IconButton
              key={index}
              target="_blank"
              href={link.href}
              size="small"
              sx={{
                color: "#ffc409",
                border: "1px solid #38415e",
                backgroundColor: "#1e2436",
                borderRadius: "4px",
                "&:hover": {
                  color: "#00e1ff",
                  borderColor: "#00e1ff",
                  backgroundColor: "#283048",
                },
              }}
            >
              <ProjectCardButtonIcon icon={link.icon} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ProjectCardButtonIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'github':
      return (<GitHubIcon fontSize="small" />);
    default:
      return (<LanguageIcon fontSize="small" />);
  }
}
