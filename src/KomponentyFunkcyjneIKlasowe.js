import React from "react";
import ReactDOM from "react-dom/client";
function KomponentyFunkcyjneIKlasowe(props) {
  // function Welcome(props) {
  //  return
  //   <div>
  //      <h1>Cześć, {props.name}</h1> <h1>Masz {props.age} Lat</h1>
  //   </div>;
  // }
  // ES5 komponent funkcyjny z zawartością

  // const Welcome = (props) => {
  //   return
  //   <div>
  //     <h1>Cześć, {props.name}</h1> <h1>Masz {props.age} Lat</h1>
  //   </div>;
  // }; ES6 komponent funkcyjny z strzałkową deklaracją

  class Welcome extends React.Component {
    render() {
      return (
        <div>
          <h1>Cześć, {this.props.name}</h1> <h1>Masz {this.props.age} Lat</h1>
        </div>
      );
    }
  } // Komponent klasowy !!
  class App extends React.Component {
    render() {
      return (
        <div>
          <Welcome name="John" age="12" />
          <Welcome name="Cahal" age="14" />
          <Welcome name="Edite" age="13" />
        </div>
      );
    }
  }

  const root = ReactDOM.createRoot(document.getElementById("box"));
  root.render(<App />);
}
export default KomponentyFunkcyjneIKlasowe;
