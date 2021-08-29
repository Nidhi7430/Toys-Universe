import React, { createContext } from "react";

export const AuthContext = createContext(undefined);
export const AuthProvider = (props) => {
  const name = "jd madarchod";

  const netlifyIdentity = require("netlify-identity-widget");
  netlifyIdentity.init();

  netlifyIdentity.on("init", (user) => console.log("init", user));
  netlifyIdentity.on("open", () => console.log("open"));

  return (
    <AuthContext.Provider value={{ name, netlifyIdentity }}>
      {props.children}
    </AuthContext.Provider>
  );
};
