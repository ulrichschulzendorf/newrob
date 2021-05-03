import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article className="not-found container">
    <h1>404!</h1>
    <p>
      Create a Robot! <Link to="/">Return to main page</Link>
    </p>
  </article>
);

export default NotFound;
