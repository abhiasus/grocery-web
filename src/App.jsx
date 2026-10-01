import React, { useState } from "react";

import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";


function Navbar({ cartCount }) {

  const location = useLocation();

  const activeLink = (path) => {
    return location.pathname === path
      ? "active-link"
      : "";
  };

  return (

    <nav className="navbar navbar-expand-lg main-navbar">

      <div className="container">

        <Link
          className="navbar-brand brand-name"
          to="/"
        >
          <i className="bi bi-basket-fill"></i>

          Fresh<span>Basket</span>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#groceryNavbar"
          aria-controls="groceryNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>


        <div
          className="collapse navbar-collapse"
          id="groceryNavbar"
        >

          <ul className="navbar-nav ms-auto navbar-links">

            <li className="nav-item">

              <Link
                className={`nav-link ${activeLink("/")}`}
                to="/"
              >
                Home
              </Link>

            </li>


            <li className="nav-item">

              <Link
                className={`nav-link ${activeLink("/products")}`}
                to="/products"
              >
                Products
              </Link>

            </li>


            <li className="nav-item">

              <Link
                className={`nav-link ${activeLink("/contact")}`}
                to="/contact"
              >
                Contact
              </Link>

            </li>


            <li className="nav-item">

              <Link
                className={`nav-link cart-nav ${activeLink("/cart")}`}
                to="/cart"
              >

                <i className="bi bi-cart3"></i>

                Cart

                <span className="cart-count">
                  {cartCount}
                </span>

              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}



function Footer() {

  return (

    <footer className="main-footer">

      <div className="container">

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">

            <h3 className="footer-brand">

              <i className="bi bi-basket-fill"></i>

              Fresh<span>Basket</span>

            </h3>

            <p className="footer-description">

              Your trusted grocery partner for fresh fruits,
              vegetables, dairy, bakery items and daily
              essentials.

            </p>


            <div className="social-icons">

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>

          </div>


          <div className="col-lg-2 col-md-6">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>


          <div className="col-lg-2 col-md-6">

            <h5 className="footer-heading">
              Categories
            </h5>

            <ul className="footer-links">

              <li>
                <a href="#">Fruits</a>
              </li>

              <li>
                <a href="#">Vegetables</a>
              </li>

              <li>
                <a href="#">Dairy</a>
              </li>

              <li>
                <a href="#">Bakery</a>
              </li>

            </ul>

          </div>


          <div className="col-lg-4 col-md-6">

            <h5 className="footer-heading">
              Contact Us
            </h5>

            <div className="footer-contact">

              <p>
                <i className="bi bi-geo-alt-fill"></i>

                Bangalore, Karnataka, India
              </p>

              <p>
                <i className="bi bi-telephone-fill"></i>

                +91 98765 43210
              </p>

              <p>
                <i className="bi bi-envelope-fill"></i>

                support@freshbasket.com
              </p>

            </div>

          </div>

        </div>


        <hr className="footer-line" />


        <div className="footer-bottom">

          <p>
            © 2026 FreshBasket. All Rights Reserved.
          </p>

          <p>
            Fresh food. Happy life.
          </p>

        </div>

      </div>

    </footer>
  );
}



function App() {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );


      if (existingProduct) {

        return currentCart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + 1
              }

            : item

        );

      }


      return [
        ...currentCart,

        {
          ...product,
          quantity: 1
        }
      ];

    });

  };


  const updateQuantity = (id, change) => {

    setCart((currentCart) =>

      currentCart

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity + change
              }

            : item

        )

        .filter(
          (item) => item.quantity > 0
        )

    );

  };


  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );

  };


  const clearCart = () => {
    setCart([]);
  };


  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (

    <HashRouter basename={import.meta.env.BASE_URL}>

      <Navbar
        cartCount={cartCount}
      />


      <main>

        <Routes>

          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/products"
            element={
              <Product
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />


          <Route
            path="/contact"
            element={
              <Contact />
            }
          />

        </Routes>

      </main>


      <Footer />

    </HashRouter>
  );
}


export default App;