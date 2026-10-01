import React, { useState } from "react";
import { Link } from "react-router-dom";


function Contact() {

  const [submitted, setSubmitted] =
    useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };


  return (

    <div className="contact-page">

      {/* HEADER */}

      <section className="page-header">

        <div className="container">

          <div data-aos="zoom-in">

            <span>
              GET IN TOUCH
            </span>

            <h1>
              Contact Us
            </h1>

            <p>
              We are here to help with your grocery journey.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* INFORMATION */}

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <span className="contact-label">
                TALK TO US
              </span>

              <h2>
                We'd love to
                <br />
                hear from you.
              </h2>

              <p className="contact-intro">

                Have a question about an order,
                delivery or our products?
                Send us a message and our team
                will get back to you.

              </p>


              <div className="contact-info-card">

                <div className="contact-info-icon">

                  <i className="bi bi-geo-alt-fill"></i>

                </div>

                <div>

                  <h5>
                    Visit Us
                  </h5>

                  <p>
                    Bangalore, Karnataka, India
                  </p>

                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-info-icon">

                  <i className="bi bi-telephone-fill"></i>

                </div>

                <div>

                  <h5>
                    Call Us
                  </h5>

                  <p>
                    +91 98765 43210
                  </p>

                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-info-icon">

                  <i className="bi bi-envelope-fill"></i>

                </div>

                <div>

                  <h5>
                    Email Us
                  </h5>

                  <p>
                    support@freshbasket.com
                  </p>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div
              className="col-lg-7"
              data-aos="flip-left"
            >

              <div className="contact-form-card">

                <span>
                  SEND A MESSAGE
                </span>

                <h3>
                  How can we help?
                </h3>


                {submitted && (

                  <div
                    className="alert alert-success"
                    data-aos="fade-down"
                  >

                    <i className="bi bi-check-circle"></i>

                    Your message has been sent successfully!

                  </div>

                )}


                <form
                  onSubmit={handleSubmit}
                >

                  <div className="row g-3">

                    <div className="col-md-6">

                      <label>
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="col-md-6">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="What is this about?"
                        required
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Write your message..."
                        required
                      ></textarea>

                    </div>


                    <div className="col-12">

                      <button
                        type="submit"
                        className="hero-btn border-0"
                      >

                        Send Message

                        <i className="bi bi-send"></i>

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="contact-cta">

        <div className="container">

          <div
            className="contact-cta-box"
            data-aos="fade-up"
          >

            <div>

              <span>
                NEED GROCERIES?
              </span>

              <h2>
                Your fresh basket is waiting.
              </h2>

            </div>

            <Link to="/products">
              Start Shopping

              <i className="bi bi-arrow-right"></i>

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;