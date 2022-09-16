import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SkladniaSkryptuIRenderowanegoElementu from "./SkladniaSkryptuIRenderowanegoElementu";
import AktualizowanieRenderowanegoElementu from "./AktualizowanieRenderowanegoElementu";
import KomponentyFunkcyjneIKlasowe from "./KomponentyFunkcyjneIKlasowe";
import RenderowanieElementu from "./RenderowanieElementu";
const root = ReactDOM.createRoot(document.getElementById("box"));
root.render(
  <React.StrictMode>
    <RenderowanieElementu />
  </React.StrictMode>
);

reportWebVitals();
