import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import i18n from "./i18n";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

function refreshVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}

window.addEventListener("resize", refreshVh);
refreshVh();
