import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main_top_padding">
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Shop">
              <Shop />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="*">
              <Redirect to="/Home" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
