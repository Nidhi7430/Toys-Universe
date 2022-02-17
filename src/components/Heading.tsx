import { Typography } from '@mui/material';
import React from 'react';

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      // variant="h3"
      sx={{
        color: 'primary.main',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: {
          xs: 'h5.fontSize',
          md: 'h4.fontSize',
          lg: 'h3.fontSize',
        },
        m: 2,
      }}
    >
      {text}
    </Typography>
  );
};

export default Heading;
