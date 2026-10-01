import React, { useState } from "react";
import { Link } from "react-router-dom";


function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  clearCart
}) {

  const [ordered, setOrdered] =
    useState(false);


  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );


  const delivery =
    subtotal >= 500 || subtotal === 0
      ? 0
      : 40;


  const total =
    subtotal + delivery;


  const placeOrder = () => {

    if (cart.length === 0) {
      return;
    }

    setOrdered(true);

    clearCart();
  };


  if (ordered) {

    return (

      <section className="cart-page">

        <div className="container">

          <div
            className="order-success"
            data-aos="zoom-in"
          >

            <div className="success-icon">

              <i className="bi bi-check-lg"></i>

            </div>

            <span>
              ORDER SUCCESSFUL
            </span>

            <h1>
              Thank you
              <br />
              for your order!
            </h1>

            <p>
              Your grocery order has been
              successfully placed.
            </p>

            <Link
              to="/products"
              className="hero-btn"
            >
              Continue Shopping

              <i className="bi bi-arrow-right"></i>

            </Link>

          </div>

        </div>

      </section>

    );
  }


  return (

    <section className="cart-page">

      <div className="container">

        {/* HEADER */}

        <div
          className="cart-page-header"
          data-aos="fade-up"
        >

          <span>
            YOUR SHOPPING CART
          </span>

          <h1>
            Your Cart
          </h1>

          <p>
            Review your fresh groceries before checkout.
          </p>

        </div>


        {cart.length === 0 ? (

          <div
            className="empty-cart"
            data-aos="zoom-in"
          >

            <i className="bi bi-cart-x"></i>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add some fresh groceries to get started.
            </p>

            <Link
              to="/products"
              className="hero-btn"
            >
              Shop Products
            </Link>

          </div>

        ) : (

          <div className="row g-5">

            {/* CART ITEMS */}

            <div className="col-lg-8">

              <div
                className="cart-items"
                data-aos="fade-right"
              >

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />


                    <div className="cart-item-info">

                      <small>
                        {item.category}
                      </small>

                      <h5>
                        {item.name}
                      </h5>

                      <p>
                        ₹{item.price} / {item.unit}
                      </p>

                    </div>


                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            -1
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            1
                          )
                        }
                      >
                        +
                      </button>

                    </div>


                    <div className="cart-item-total">

                      <strong>
                        ₹
                        {item.price *
                          item.quantity}
                      </strong>

                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                      >
                        <i className="bi bi-trash3"></i>
                      </button>

                    </div>

                  </div>

                ))}


                <button
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

              </div>

            </div>


            {/* SUMMARY */}

            <div className="col-lg-4">

              <div
                className="cart-summary"
                data-aos="fade-left"
              >

                <span>
                  ORDER SUMMARY
                </span>

                <h3>
                  Checkout
                </h3>


                <div className="summary-row">

                  <span>
                    Subtotal
                  </span>

                  <strong>
                    ₹{subtotal}
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Delivery
                  </span>

                  <strong>

                    {delivery === 0
                      ? "FREE"
                      : `₹${delivery}`}

                  </strong>

                </div>


                <hr />


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{total}
                  </strong>

                </div>


                <button
                  className="checkout-btn"
                  onClick={placeOrder}
                >

                  Place Order

                  <i className="bi bi-arrow-right"></i>

                </button>


                <p className="delivery-note">

                  <i className="bi bi-truck"></i>

                  Free delivery above ₹500

                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Cart;