import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return !!user ? <Component {...props} /> : <Redirect to="/profile" />;
      }}
    />
  );
};

export default PrivateRoute;
