import React, { useState } from "react";
import apple from "../assets/images/apple.jpg";
import banana from "../assets/images/banana.jpg";
import tomato from "../assets/images/tomato.jpg";
import carrot from "../assets/images/carrot.jpg";
import milk from "../assets/images/milk.jpg";
import bread from "../assets/images/bread.jpg";
import rice from "../assets/images/rice.jpg";
import eggs from "../assets/images/eggs.jpg";
import spinach from "../assets/images/spinach.jpg";
import juice from "../assets/images/juice.jpg";
import chips from "../assets/images/chips.jpg";
import honey from "../assets/images/honey.jpg";


function Product({ addToCart }) {

  const products = [

    {
      id: 1,
      name: "Fresh Apples",
      category: "Fruits",
      price: 120,
      unit: "1 kg",
      image: apple
    },

    {
      id: 2,
      name: "Bananas",
      category: "Fruits",
      price: 60,
      unit: "1 dozen",
      image: banana
    },

    {
      id: 3,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 45,
      unit: "1 kg",
      image: tomato
    },

    {
      id: 4,
      name: "Carrots",
      category: "Vegetables",
      price: 55,
      unit: "1 kg",
      image: carrot
    },

    {
      id: 5,
      name: "Farm Fresh Milk",
      category: "Dairy",
      price: 65,
      unit: "1 litre",
      image: milk
    },

    {
      id: 6,
      name: "Brown Bread",
      category: "Bakery",
      price: 50,
      unit: "400 g",
      image: bread
    },

    {
      id: 7,
      name: "Basmati Rice",
      category: "Staples",
      price: 160,
      unit: "1 kg",
      image: rice
    },

    {
      id: 8,
      name: "Organic Eggs",
      category: "Dairy",
      price: 90,
      unit: "6 pcs",
      image: eggs
    },

    {
      id: 9,
      name: "Green Spinach",
      category: "Vegetables",
      price: 35,
      unit: "250 g",
      image: spinach
    },

    {
      id: 10,
      name: "Orange Juice",
      category: "Beverages",
      price: 110,
      unit: "1 litre",
      image: juice
    },

    {
      id: 11,
      name: "Potato Chips",
      category: "Snacks",
      price: 40,
      unit: "100 g",
      image: chips
    },

    {
      id: 12,
      name: "Natural Honey",
      category: "Staples",
      price: 180,
      unit: "250 g",
      image: honey
    }

  ];


  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Staples",
    "Beverages",
    "Snacks"
  ];


  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");


  let filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });


  if (sort === "low") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  }


  if (sort === "high") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  }


  return (

    <div className="product-page">

      {/* PAGE HEADER */}

      <section className="page-header">

        <div className="container">

          <div
            data-aos="fade-right"
          >

            <span>
              FRESHBASKET SHOP
            </span>

            <h1>
              Our Products
            </h1>

            <p>
              Fresh groceries for every home.
            </p>

          </div>

        </div>

      </section>


      <section className="shop-section">

        <div className="container">

          {/* SEARCH + SORT */}

          <div
            className="shop-toolbar"
            data-aos="fade-down"
          >

            <div className="search-wrapper">

              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>


            <select
              className="sort-select"
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >

              <option value="default">
                Sort Products
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

            </select>

          </div>


          {/* CATEGORIES */}

          <div
            className="category-filters"
            data-aos="fade-up"
          >

            {categories.map(
              (item) => (

                <button
                  key={item}
                  className={
                    category === item
                      ? "category-btn active"
                      : "category-btn"
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>

              )
            )}

          </div>


          <div className="result-count">

            Showing{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            products

          </div>


          {/* PRODUCT GRID */}

          <div className="row g-4">

            {filteredProducts.map(
              (product, index) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={product.id}
                  data-aos="flip-up"
                  data-aos-delay={
                    index * 80
                  }
                >

                  <div className="product-card">

                    <div className="product-img">

                      <span className="product-badge">
                        {product.category}
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
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart(product)
                          }
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


          {/* EMPTY */}

          {filteredProducts.length === 0 && (

            <div
              className="empty-products"
              data-aos="zoom-in"
            >

              <i className="bi bi-search"></i>

              <h3>
                No products found
              </h3>

              <p>
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Product;