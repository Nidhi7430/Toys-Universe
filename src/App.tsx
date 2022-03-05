import React, { useMemo } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/layout/navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageLayout from './components/layout/page_layout/PageLayout';
import Profile from './pages/Profile';
import { AuthContext, AuthProvider } from './context/AuthContext';

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
        {/* <NavBar /> */}
        <AuthProvider>
          <Navbar />
          <PageLayout>
            <Switch>
              {/* TODO Product Detail Page */}
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
