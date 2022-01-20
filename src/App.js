import React from 'react';
import Header from './components/header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import AddProductPage from './pages/addProduct/AddProductPage';
import Footer from './components/footer/Footer';
import './App.css';
import AuthProvider from './services/auth';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/admin" component={AddProductPage} />
          <Route exact path="/*">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
