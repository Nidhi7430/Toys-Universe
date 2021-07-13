import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer>
        <div class="container py-5">
          <div class="row">
            <div class="col-xl-3 col-md-3 col-sm-4 col-6">
              <h5 class="pb-2 text-light fw-bold">Visit</h5>
              <ul class="list-unstyled text-small">
                <li class="py-1">
                  <a href  class="text-decoration-none text-light">Shop</a>
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light">About</a>
                </li>
                <li class="py-1">
                  <a href class="text-decoration-none text-light">Contact</a>
                </li>
                <li class="py-1">
                  <a href class="text-decoration-none text-light"
                    >Stocklist</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-4 col-6">
              <h5 class="pb-2 text-light fw-bold">Information</h5>
              <ul class="list-unstyled text-small">
                <li class="py-1">
                  <a href  class="text-decoration-none text-light">FAQ</a>
                </li>
                <li class="py-1">
                  <a href class="text-decoration-none text-light"
                    >Shipping & Returns</a
                  >
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >Store Policy</a
                  >
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >Payment Methods</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-4 col-6">
              <h5 class="pb-2 text-light fw-bold">Social</h5>
              <ul class="list-unstyled text-small">
                <li class="py-1">
                  <a href  class="text-decoration-none text-light">Facebook</a>
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >Instagram</a
                  >
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light">Twitter</a>
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >Pinterest</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-4 col-6">
              <h5 class="pb-2 text-light fw-bold">Contact Us</h5>
              <ul class="list-unstyled text-small">
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >123456-789</a
                  >
                </li>
                <li class="py-1">
                  <a href  class="text-decoration-none text-light"
                    >info@gmail.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer