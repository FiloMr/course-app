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
import Clock from "./StanIMetodyCykluZycia";
import LoggingButton from "./ObslugaZdarzenKlasa";
import Toggle from "./ObslugaZdarzenFunkcja";
import RenderowanieWarunkowe from "./RenderowanieWarunkowe";
import NameForm from "./FormBasic";
import FlavorForm from "./FomrSelect";
import Reservation from "./FormCheck";
import Calculator from "./PrzekazywanieDanychKalkulator";
const root = ReactDOM.createRoot(document.getElementById("box"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();
