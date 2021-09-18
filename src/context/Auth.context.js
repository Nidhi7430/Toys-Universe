import React, { useState } from "react";

export const AuthContext = React.createContext(null);

const initialState = {
  isAuthenitcated: false,
  authenticating: false,
  authError: null,
};

export const AuthProvider = (props) => {
  const [authState, setAuthState] = useState(initialState);

  const setAuthSuccess = (isAuthenitcated) => setAuthState({ isAuthenitcated });
  const setAuthLoading = (authenticating) => setAuthState({ authenticating });
  const setAuthError = (authError) => setAuthState(authError);

  const login = (email, password) => {
    setAuthLoading(true);
    setAuthSuccess(false);
    setAuthError(null);

    //function that do login
    LoginFunc(email, password, (error) => {
      setAuthLoading(false);

      if (!error) {
        setAuthSuccess(true);
      } else {
        setAuthError(error);
      }
    });
  };

  const logout = () => {
    setAuthLoading(false);
    setAuthSuccess(false);
    setAuthError(null);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// TODO fake
const LoginFunc = (email, password, callback) =>
  setTimeout(() => {
    if (email === "admin" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
