import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />

        <Switch>
          <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </AuthProvider>
    </>
  );
};

export default App;
