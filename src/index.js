import React from "react";
import ReactDOM from "react-dom";
import Car from "./App.js";
import Model from "./Bike.js";

const myfirstelement = <h1>Hello React!</h1>;
const secondElement = <h2>Im so fuckin horny dawg</h2>;
const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myModel = <Model type="Ford" />;

ReactDOM.render(myfirstelement, document.getElementById("root"));
ReactDOM.render(secondElement, document.getElementById("rooted"));
ReactDOM.render(myelement, document.getElementById("Sike"));
ReactDOM.render(<Car />, document.getElementById("root1"));
ReactDOM.render(myModel, document.getElementById("root11"));
