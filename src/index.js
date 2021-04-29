import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
