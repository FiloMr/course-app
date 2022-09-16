import React from "react";
import ReactDOM from "react-dom/client";
function RenderowanieElementu() {
  const elementEmbed = (
    <div>
      <h1>Witaj!</h1>
      <h2>Dobrze cię widzieć.</h2>
    </div>
  );

  const root = ReactDOM.createRoot(document.getElementById("box"));
  root.render(elementEmbed);
}
export default RenderowanieElementu;
