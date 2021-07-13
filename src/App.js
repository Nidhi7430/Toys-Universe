import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
import FillerImage from "./components/filler_image/FillerImage";
import home1 from "./images/home1.webp";
import home2 from "./images/home2.webp";
import home3 from "./images/home3.webp";
import home4 from "./images/home4.webp";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section class="home">
          <div class="container">
            <div class="row">
              <div class="col-8">
                <Slider />
              </div>
              <div class="col-4 d-flex flex-column justify-content-between">
                <FillerImage
                  cardTitle="About the Toys Universe"
                  buttonText="Our Story"
                  image={home1}
                />
                {/* <br /> */}
                <FillerImage image={home2} />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-4">
                <FillerImage image={home3} />
              </div>
              <div class="col-8">
                <FillerImage image={home4} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
