import React from "react";
import { Link } from "react-router-dom";


function Home({ addToCart }) {

  const products = [

    {
      id: 1,
      name: "Fresh Apples",
      category: "Fruits",
      price: 120,
      unit: "1 kg",
      image: "/src/assets/images/apple.jpg"
    },

    {
      id: 2,
      name: "Bananas",
      category: "Fruits",
      price: 60,
      unit: "1 dozen",
      image: "/src/assets/images/banana.jpg"
    },

    {
      id: 3,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 45,
      unit: "1 kg",
      image: "/src/assets/images/tomato.jpg"
    },

    {
      id: 4,
      name: "Carrots",
      category: "Vegetables",
      price: 55,
      unit: "1 kg",
      image: "/src/assets/images/carrot.jpg"
    },

    {
      id: 5,
      name: "Farm Fresh Milk",
      category: "Dairy",
      price: 65,
      unit: "1 litre",
      image: "/src/assets/images/milk.jpg"
    },

    {
      id: 6,
      name: "Brown Bread",
      category: "Bakery",
      price: 50,
      unit: "400 g",
      image: "/src/assets/images/bread.jpg"
    }

  ];


  return (

    <div>

      {/* HERO */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <span className="hero-small-title">
                FRESH & HEALTHY
              </span>

              <h1 className="hero-title">

                Your Daily
                <br />

                <span>Grocery</span> Partner

              </h1>

              <p className="hero-text">

                Get fresh fruits, vegetables, dairy,
                and daily essentials delivered to your
                doorstep. Healthy choices for a better tomorrow.

              </p>


              <div className="hero-buttons">

                <Link
                  to="/products"
                  className="hero-btn"
                >
                  Shop Now

                  <i className="bi bi-arrow-right"></i>

                </Link>


                <Link
                  to="/contact"
                  className="hero-secondary-btn"
                >
                  Contact Us
                </Link>

              </div>

            </div>


            <div
              className="col-lg-6"
              data-aos="flip-right"
            >

              <div className="hero-image-wrapper">

                <img
                  src="/src/assets/images/apple.jpg"
                  alt="Fresh groceries"
                  className="hero-image"
                />

                <div className="hero-badge">

                  <i className="bi bi-patch-check-fill"></i>

                  <div>

                    <strong>
                      100% Fresh
                    </strong>

                    <small>
                      Quality Products
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="fade-up"
            >

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-truck"></i>
                </div>

                <div>

                  <h5>
                    Free Delivery
                  </h5>

                  <p>
                    On orders above ₹499
                  </p>

                </div>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-leaf"></i>
                </div>

                <div>

                  <h5>
                    Fresh Products
                  </h5>

                  <p>
                    100% natural & healthy
                  </p>

                </div>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>

                  <h5>
                    Secure Payment
                  </h5>

                  <p>
                    Safe & secure transactions
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="category-section">

        <div className="container">

          <div
            className="section-heading text-center"
            data-aos="fade-up"
          >

            <span>
              EXPLORE
            </span>

            <h2>
              Shop by Category
            </h2>

            <p>
              Explore our wide range of fresh and quality products
            </p>

          </div>


          <div className="row g-4 mt-3">

            <div
              className="col-6 col-md-3"
              data-aos="flip-up"
            >

              <div className="category-card">

                <img
                  src="/src/assets/images/apple.jpg"
                  alt="Fruits"
                />

                <h5>
                  Fruits
                </h5>

              </div>

            </div>


            <div
              className="col-6 col-md-3"
              data-aos="flip-up"
              data-aos-delay="100"
            >

              <div className="category-card">

                <img
                  src="/src/assets/images/carrot.jpg"
                  alt="Vegetables"
                />

                <h5>
                  Vegetables
                </h5>

              </div>

            </div>


            <div
              className="col-6 col-md-3"
              data-aos="flip-up"
              data-aos-delay="200"
            >

              <div className="category-card">

                <img
                  src="/src/assets/images/milk.jpg"
                  alt="Dairy"
                />

                <h5>
                  Dairy
                </h5>

              </div>

            </div>


            <div
              className="col-6 col-md-3"
              data-aos="flip-up"
              data-aos-delay="300"
            >

              <div className="category-card">

                <img
                  src="/src/assets/images/bread.jpg"
                  alt="Bakery"
                />

                <h5>
                  Bakery
                </h5>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* POPULAR PRODUCTS */}

      <section className="products-section">

        <div className="container">

          <div
            className="section-heading text-center"
            data-aos="fade-up"
          >

            <span>
              OUR PICKS
            </span>

            <h2>
              Popular Products
            </h2>

            <p>
              Fresh items handpicked just for you
            </p>

          </div>


          <div className="row g-4 mt-3">

            {products.map(
              (product, index) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={
                    index * 100
                  }
                >

                  <div className="product-card">

                    <div className="product-img">

                      <span className="product-badge">
                        Fresh
                      </span>

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>


                    <div className="product-details">

                      <small>
                        {product.category}
                      </small>

                      <h5>
                        {product.name}
                      </h5>

                      <p>
                        {product.unit}
                      </p>


                      <div className="product-footer">

                        <strong>
                          ₹{product.price}
                        </strong>

                        <button
                          onClick={() =>
                            addToCart(product)
                          }
                          className="add-cart-btn"
                        >
                          <i className="bi bi-cart-plus"></i>

                          Add to Cart
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>


          <div
            className="text-center mt-5"
            data-aos="fade-up"
          >

            <Link
              to="/products"
              className="view-products-btn"
            >
              View All Products

              <i className="bi bi-arrow-right"></i>

            </Link>

          </div>

        </div>

      </section>


      {/* OFFER */}

      <section className="offer-section">

        <div className="container">

          <div
            className="offer-banner"
            data-aos="zoom-in"
          >

            <div>

              <span>
                SPECIAL OFFER
              </span>

              <h2>
                Fresh groceries,
                <br />
                better prices.
              </h2>

              <p>
                Save more when you shop your everyday essentials.
              </p>

              <Link
                to="/products"
                className="offer-btn"
              >
                Shop Now
              </Link>

            </div>


            <div className="offer-icon">

              <i className="bi bi-basket2-fill"></i>

            </div>

          </div>

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="newsletter-section">

        <div className="container">

          <div
            className="newsletter-box"
            data-aos="zoom-in"
          >

            <div>

              <span>
                STAY UPDATED
              </span>

              <h2>
                Fresh deals in your inbox.
              </h2>

              <p>
                Subscribe for grocery offers and updates.
              </p>

            </div>


            <form
              onSubmit={(e) =>
                e.preventDefault()
              }
            >

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;