import Header from "./components/header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import AddProductPage from "./pages/addProduct/AddProductPage";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main_top_padding">
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
      </div>
      <Footer />
    </>
  );
}

export default App;
