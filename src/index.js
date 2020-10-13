import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./assets/css/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import App from "./App";

const root = document.createElement("div");
root.id = "root";
root.classList.add("bg-light");
document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById("root"));
