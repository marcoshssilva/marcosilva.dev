import React from "react";
import Image from "next/image";
import {Box, Typography} from "@mui/material";

export default function MenuLogoGroup() {
  return (
    <>
      <Typography component={"a"} href={"/"} className={"menu-header-logo"}>
        <Image className={"inline-block"} src={"/images/logo/logo.png"} alt={"Icon from website"} width={62} height={62} />
        <Box>
          <Image
            className={"inline-block"}
            src={"/images/logo/MarcoSilva.png"}
            alt={"MarcoSilva"}
            width={115}
            height={28.75}
          />
          <Image
            id={"menu-globe"}
            className={"inline-block"}
            src={"/images/logo/globo-language-pink.png"}
            alt={"globe"}
            width={18}
            height={18}
          />
          <Image
            className={"inline-block"}
            src={"/images/logo/DEV.png"}
            alt={"DEV"}
            width={36}
            height={24}
          />
        </Box>
      </Typography>
    </>
  )
}
