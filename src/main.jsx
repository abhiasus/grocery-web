import React from "react";
import ReactDOM from "react-dom/client";

import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";

import "./assets/style/style.css";

import App from "./App";

AOS.init({
  duration: 800,
  once: true,
  offset: 80,
  easing: "ease-out-cubic"
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);