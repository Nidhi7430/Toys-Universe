import React from 'react';
import { Google } from '@mui/icons-material';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const SignUp: React.FC = () => {
  const { handleSignIn } = useAuth();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        component="form"
      >
        <Typography variant="h5" textAlign="center">
          Sign In
        </Typography>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          sx={{ m: 1 }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          sx={{ m: 1 }}
        />
        <TextField
          variant="outlined"
          label="Confirm Password"
          type="password"
          sx={{ m: 1 }}
        />
        <Typography textAlign="center" variant="h6" sx={{ m: 1 }}>
          OR
        </Typography>
        <Button
          onClick={handleSignIn}
          variant="contained"
          startIcon={<Google />}
          sx={{ m: 1 }}
        >
          Sing in with Google
        </Button>
      </Box>
    </>
  );
};
export default SignUp;
