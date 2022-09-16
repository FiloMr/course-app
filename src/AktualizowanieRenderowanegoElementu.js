import React from "react";
import ReactDOM from "react-dom/client";
function AktualizowanieRenderowanegoElementu(props) {
  const newRoot = ReactDOM.createRoot(document.getElementById("box"));

  function tick() {
    const time = (
      <div>
        <h1>Hello world!</h1>
        <h2>Actual Time in Warsaw: {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    newRoot.render(time);
  }

  setInterval(tick, 1000);
}

export default AktualizowanieRenderowanegoElementu;
