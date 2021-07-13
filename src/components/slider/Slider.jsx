import React from 'react'

import slider1 from '../../images/slider1.webp'
import slider2 from '../../images/slider2.webp'
import './slider.css'

const Slider = () => {
    return (
        <div
        id="carouselExampleControls"
        class="carousel slide home_slider"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={slider1}
              alt="home_slider"
              class="d-block w-100"
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-dark fw-bold text-uppercase">
                Hope on board
              </h2>
              <p>With our new train collection</p>
              <a href="shop.html" class="btn btn-outline-primary"
                >Shop Now</a
              >
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={slider2}
              alt="home_slider"
              class="d-block w-100"
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-dark fw-bold text-uppercase">
                Watch Them Grow
              </h2>
              <p>With our new train collection</p>
              <a href="shop.html" class="btn btn-outline-primary"
                >Shop Now</a
              >
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Slider