import React from "react";
import { createRoot } from "react-dom/client";
import CardPage from "./CardPage.jsx";
// Styles communs du site (variables, boutons, focus), puis ceux de la carte.
import "../styles.css";
import "./card.css";
import "./card-print.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardPage />
  </React.StrictMode>
);
