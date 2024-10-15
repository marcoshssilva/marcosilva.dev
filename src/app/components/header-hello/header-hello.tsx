import { Box, Typography } from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box className="flex flex-col">
      <Typography variant="h1" sx={{fontWeight: 600, fontSize: '4.12rem', textAlign: 'left'}}>
        Construir tecnologia<br/> para um novo <br/>mundo <br/> faz o meu propósito.
      </Typography>
    </Box>
    </>;
}
