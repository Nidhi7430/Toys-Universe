import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/profile" />;
      }}
    />
  );
};

export default PrivateRoute;
