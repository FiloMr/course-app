import React, {Component} from "react";
import ReactDOM from "react-dom/client";

  class LoggingButton extends React.Component {
    // Poniższy kod wymusza dowiązanie `this` wewnątrz handleClick.
    handleClick = () => {
      console.log("this ma wartość:", this);
    };
    render() {
      return <button onClick={this.handleClick}>Kliknij mnie</button>;
    }
  }

export default LoggingButton;
