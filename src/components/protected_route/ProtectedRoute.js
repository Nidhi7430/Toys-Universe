import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../services/auth/AuthProvider";

const ProtectedRoute = ({ children, ...rest }) => {
  const { auth } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/profile", state: { from: location } }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;