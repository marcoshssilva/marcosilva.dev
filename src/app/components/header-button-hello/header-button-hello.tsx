import { SiteHeaderButtonHello } from "@/app/types";
import {
  Button
} from "@mui/material";

export default function HeaderButtonHello(props: SiteHeaderButtonHello) {
  const isContained = props.variant === "contained";

  return (
    <Button
      variant={props.variant}
      color={props.color}
      href={props.href}
      sx={{
        paddingY: "0.85rem",
        paddingX: "1.75rem",
        fontFamily: "monospace",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.06em",
        borderRadius: "4px",
        gap: 1,
        backgroundColor: isContained ? "#1e2436" : "#0b0e17",
        color: isContained ? "#ffc409" : "#00e1ff",
        border: isContained ? "2px solid #AA954F" : "2px solid #262c3d",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#283048",
          borderColor: isContained ? "#00e1ff" : "#ffc409",
          color: isContained ? "#00e1ff" : "#ffc409",
          boxShadow: "0 0 12px rgba(0, 225, 255, 0.28)",
        },
      }}
    >
      <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.35)" }}>
        {props.content}
      </span>
      {props.icon ?? <></>}
    </Button>
  );
}
