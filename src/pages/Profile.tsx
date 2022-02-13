import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, handleSignIn, handleSignOut } = useAuth();

  return (
    <>
      <h2>Sign up</h2>
      {user ? (
        <>
          <h3>username: {user.displayName}</h3>
          <img src={user.photoURL || ''} alt="user_profile" />
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>sign in</button>
        </>
      )}
    </>
  );
};

export default Profile;
