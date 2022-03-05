import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import api from '../services/axios';
import { auth, provider } from '../services/Firebase';

export const AuthContext = React.createContext<{
  user?: User | null;
  handleSignIn?: () => Promise<void>;
  handleSignOut?: () => Promise<void>;
}>({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  // TODO Manage users in Firestore

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        api.post('/users', currentUser);
        setUser(currentUser);
      }
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
