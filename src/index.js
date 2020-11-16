import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename="/reactjs-gmail-clone">
    <App />
  </BrowserRouter>,
  rootNode
);
