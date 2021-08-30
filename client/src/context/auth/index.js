import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext(undefined);
export const AuthProvider = (props) => {
  const netlifyIdentity = require("netlify-identity-widget");
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  //   netlifyIdentity.on("open", () => console.log("open"));
  netlifyIdentity.on("login", (user) => {
    setUser(user.user_metadata.full_name);
    setRoles(user.app_metadata.roles);
  });

  netlifyIdentity.on("logout", () => {
    setUser(null);
    setRoles([]);
  });

  useEffect(() => {
    netlifyIdentity.init();
    if (netlifyIdentity.currentUser()) {
      setUser(netlifyIdentity.currentUser().user_metadata.full_name);
      setRoles(netlifyIdentity.currentUser().app_metadata.roles);
    }
  }, [netlifyIdentity]);

  //   const getUsername = () => {
  //     return netlifyIdentity.currentUser().user_metadata.full_name || "";
  //   };

  //   const getUserEmail = () => {
  //     return netlifyIdentity.currentUser().email || "";
  //   };

  //   const getUserRoles = () => {
  //     return netlifyIdentity.currentUser().app_metadata.roles || [];
  //   };

  return (
    <AuthContext.Provider value={{ netlifyIdentity, user, roles }}>
      {props.children}
    </AuthContext.Provider>
  );
};
