import { CloudDone } from '@mui/icons-material';
import { Button, CardActions, CardContent } from '@mui/material';
import React from 'react';

const Done: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActiveStep }) => {
  return (
    <>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CloudDone color="primary" sx={{ fontSize: '20em' }} />
        <Button variant="contained" onClick={() => setActiveStep(0)}>
          Add new product
        </Button>
      </CardContent>
    </>
  );
};

export default Done;
