import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { Email, Facebook, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: 'auto', bottom: 0, bgcolor: 'primary.light' }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={1}
          sx={{ my: 1 }}
        >
          <Facebook fontSize="large" />
          <Instagram fontSize="large" />
          <Email fontSize="large" />
        </Stack>
        <Typography variant="button">Toys universe &copy; 2022</Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
