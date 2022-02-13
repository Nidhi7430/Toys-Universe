import { Container } from '@mui/material';
import React from 'react';

const PageLayout: React.FC = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '90vh',
      }}
    >
      {children}
    </Container>
  );
};

export default PageLayout;
