import React, { useMemo } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Navbar from './components/layout/navbar/Navbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Product from './pages/Product';
import PrivateRoute from './components/layout/custom_routes/PrivateRoute';
import ProductRoute from './components/layout/custom_routes/ProductRoute';
import PageLayout from './components/layout/page_layout/PageLayout';
import SignUp from './pages/SignUp';

// TODO theme pallete
const theme = createTheme({
  palette: {
    primary: {
      main: '#232f34',
      light: '#344955',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f9aa33',
    },
  },
});

// for dynamic routes of products
// https://v5.reactrouter.com/web/example/query-parameters
export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {/* <NavBar /> */}
          <Navbar />
          <PageLayout>
            <Switch>
              {/* TODO Product Detail Page */}
              <ProductRoute path="/product/:id" component={Product} />
              <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
              <Route path="/register" component={SignUp}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </PageLayout>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
