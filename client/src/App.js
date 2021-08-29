import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import AddProductPage from "./pages/addProduct/AddProductPage";
import Footer from "./components/footer/Footer";
import "./App.css";
import * as NetlifyIdentityWidget from "netlify-identity-widget";

function App() {
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    setIdentity(NetlifyIdentityWidget.init());
  }, []);

  useEffect(() => {
    if (identity) console.log(identity.open());
  }, [identity]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/HomePage">
          <HomePage />
        </Route>
        <Route exact path="/ShopPage">
          <ShopPage />
        </Route>
        <Route exact path="/AboutPage">
          <AboutPage />
        </Route>
        <Route exact path="/ContactPage">
          <ContactPage />
        </Route>
        <Route exact path="/AddProductPage">
          <AddProductPage />
        </Route>
        <Route exact path="/*">
          <Redirect to="/HomePage" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
