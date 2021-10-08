import * as React from "react";
import { createContext, useState } from "react";
import { signInWithPopup, signOut } from "@firebase/auth";
import { firebase_auth, googleProvider } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userName: null,
    userEmail: null,
  });

  const handleLogin = async () => {
    if (auth.isAuthenticated) return;
    try {
      const result = await signInWithPopup(firebase_auth, googleProvider);
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        userEmail: result.user.email,
        userName: result.user.displayName,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(firebase_auth);
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        userEmail: null,
        userName: null,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
