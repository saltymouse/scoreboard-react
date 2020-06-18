import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './i18n';

ReactDOM.render(<App />, document.getElementById("root"));

function refreshVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}

window.addEventListener("resize", refreshVh);
refreshVh();
