import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import configureProductsStore from "./hooks-store/products-store";

configureProductsStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
