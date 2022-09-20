import React, { Component } from "react";
import ReactDOM from "react-dom/client";
function RenderowanieWarunkowe(props) {
  function UserGreeting(props) {
    return <h1>Witamy ponownie!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Proszę się zarejestrować.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  const root = ReactDOM.createRoot(document.getElementById("box"));
  // Spróbuj zmienić na isLoggedIn={true}:
  root.render(<Greeting isLoggedIn={true} />);
}
export default RenderowanieWarunkowe;
