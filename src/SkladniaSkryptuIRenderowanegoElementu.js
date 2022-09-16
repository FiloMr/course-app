import React from "react";
import ReactDOM from "react-dom/client";
function SkladniaSkryptuIRenderowanegoElementu(props) {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const getGreeting = (user) => {
    if (user) {
      return <h1>Witaj, {formatName(user)}!</h1>;
    }
    {
      return <h1>Witaj, nieznajomy.</h1>;
    }
  };

  const user = {
    firstName: "Filip",
    lastName: "Mroz",
    avatarURL:
      "https://cdn.pixabay.com/photo/2016/06/13/10/06/clownfish-1453910_960_720.jpg",
  };

  const element = (
    <div>
      <h1>{getGreeting(user)}</h1> <img src={user.avatarURL} />{" "}
    </div>
  );
  const rootCreate = ReactDOM.createRoot(document.getElementById("box"));
  rootCreate.render(element);
}

// Note: this structure is simplified
// const element = {
// type: 'h1',
// props: {
//   className: 'greeting',
//   children: 'Witaj, świecie'
// }
// };
// Obiekt zwany elementem reactowym - w ten sposob react zapisuje węzły swojego wirtualnego drzewa DOM
// Jsx to string ktory prawidlowo interpretuje znaczniki html i wyrazenia js ujete w nawiasach klamrowych
// Jsx wystepuje tylko w elemencie ktory renderujemy a reszta to czysty JS

export default SkladniaSkryptuIRenderowanegoElementu;
