import React from "react";
import { Link } from "react-router-dom";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <ul>
        <a href="/home">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
      </ul>
    </div>
  );
};

export default App;
