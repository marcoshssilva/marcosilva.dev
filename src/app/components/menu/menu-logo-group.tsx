import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function MenuLogoGroup() {
  return (
    <Typography
      component={"a"}
      href={"/"}
      className={"menu-header-logo"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 1.5,
        py: 0.75,
        backgroundColor: "#0b0e17",
        border: "1px solid #262c3d",
        borderLeft: "3px solid #ffc409",
        borderRadius: "6px",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          borderColor: "#00e1ff",
          boxShadow: "0 0 12px rgba(0, 225, 255, 0.2)",
        },
        "&::before": {
          display: "none !important",
        },
      }}
    >
      <Image
        className={"inline-block"}
        src={"/images/logo/logo.png"}
        alt={"Icon from website"}
        width={54}
        height={33}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
        <Image
          className={"inline-block"}
          src={"/images/logo/MarcoSilva.png"}
          alt={"MarcoSilva"}
          width={110}
          height={14}
        />
        <Image
          id={"menu-globe"}
          className={"inline-block"}
          src={"/images/logo/globo-language-pink.png"}
          alt={"globe"}
          width={14}
          height={14}
        />
        <Image
          className={"inline-block"}
          src={"/images/logo/DEV.png"}
          alt={"DEV"}
          width={34}
          height={14}
        />
      </Box>
    </Typography>
  );
}
