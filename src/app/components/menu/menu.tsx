import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export default function MenuComponent() {
  return (
    <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar>
          <Typography variant="h5" component="a" href="/">
            marcoshssilva
          </Typography>
          <Typography variant="h5" component="a" href="/" color='primary'>
            .com.br
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
