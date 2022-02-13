import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { auth, db, provider } from '../services/Firebase';

const AuthContext = React.createContext<{
  user?: User;
  handleSignIn?: () => Promise<void>;
  handleSignOut?: () => Promise<void>;
}>({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const addNewUsers = async (username: string, photoUrl: string) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: username,
        photoURL: photoUrl,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider).then((currentUser) => {
        if (currentUser.user.displayName && currentUser.user.photoURL)
          addNewUsers(currentUser.user.displayName, currentUser.user.photoURL);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(undefined);
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
