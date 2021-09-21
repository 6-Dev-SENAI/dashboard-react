import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes.js";

import "./include/bootstrap.js";
import './assets/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
