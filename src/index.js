import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App/App";

import "./reset.scss";
import "./styles.scss";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
