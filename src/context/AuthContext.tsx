import useId from '@mui/material/utils/useId';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
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
  const addNewUsers = async (user: User) => {
    try {
      // await setDoc(doc(db, 'users', user.uid), {
      //   email: user.email,
      //   name: user.displayName,
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const resObject = await signInWithPopup(auth, provider);
      addNewUsers(resObject.user);
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
      if (currentUser) setUser(currentUser);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
