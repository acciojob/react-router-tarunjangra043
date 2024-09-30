import React from "react";
import { Link } from "react-router-dom";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default App;
