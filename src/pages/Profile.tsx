import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import SignIn from '../components/SignIn';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, handleSignIn, handleSignOut } = useAuth();

  if (!user) return <SignIn />;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>Hi, {user.displayName}</Typography>
      <Button variant="contained" onClick={handleSignOut}>
        Log out
      </Button>
    </Box>
  );
};

export default Profile;
