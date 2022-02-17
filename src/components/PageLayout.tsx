import { Container } from '@mui/material';
import React from 'react';

const PageLayout: React.FC = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        // bgcolor: 'primary.light',
        display: 'block',
        position: 'relative',
        my: '10vh',
      }}
    >
      {children}
    </Container>
  );
};

export default PageLayout;
