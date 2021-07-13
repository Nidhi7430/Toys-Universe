import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a
            class="navbar-brand text-dark fw-bold text-transform-uppercase"
            href="index.html"
            ><span class="logo_f_letter">T</span>oy<span class="logo_s_letter"
              >U</span
            >niverse</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-dark"
                  aria-current="page"
                  href="index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header