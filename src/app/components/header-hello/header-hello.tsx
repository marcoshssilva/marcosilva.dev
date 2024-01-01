import { Box, Typography } from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box className="flex flex-col">

      <Typography variant="h1" className={"font-semibold text-[4rem]"}>Olá, eu sou</Typography>
      <Typography variant="h1" className={"font-semibold text-[4rem]"}>Marcos Henrique.</Typography>
      <Typography variant="h1" className={"font-light text-[2.12rem] mb-3"}>Desenvolvo aplicações para a web</Typography>

      <Typography className={'py-2 pe-4'}>
        Sou um Desenvolvedor FullStack com alguns anos de experiência.<br/>
        Atualmente, focado em desenvolvimento de aplicações voltadas para microserviços e escalabilidade vertical.
      </Typography>

    </Box>
    </>;
}
