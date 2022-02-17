import { Typography } from '@mui/material';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <>
      <Typography
        textAlign="justify"
        sx={{
          fontSize: {
            xs: 'body1.fontSize',
            sm: 'h6.fontSize',
            md: 'h5.fontSize',
          },
        }}
      >
        Universe is India's finest and most trusted Educational toys
        manufacturer. Our main focus is to engage kids in learning something new
        with our products. Educational toys can help kids boost their IQ,
        Enhances the development of their senses & Improved Concentration. Kids
        can Learn while playing. We put our efforts into making educational toys
        which can help kids learn while they play.
        <br />
        We are always looking for new innovations in our products which can
        satisfy parents as well as kids. We are continually adding new
        innovative products in our portfolio and growing. We always look for
        customers' feedback so that we can improve our products that can satisfy
        the needs of parents for their kids.
      </Typography>
    </>
  );
};

export default AboutSection;
