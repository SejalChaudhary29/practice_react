import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
//here the react works like this 


// Case 1 
const anotherElemet = <h1>hello i am heading</h1>

// Case 2

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit the google here",
  anotherElemet
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
