import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./libs/context/AppContext";

const root = document.getElementById("root");
ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  root
);
