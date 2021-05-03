import React from "react";
import { Link } from "react-router-dom";

const Robot = ({ robot }) => {
  return (
    <article className="container">
      <h2></h2>
      <h1>{robot.name}'s position:</h1>
      <p>posX: {robot.posX}</p>
      <p>posY: {robot.posY}</p>
      <h2>{robot.name} is heading to:</h2>
      <p>{robot.heading}</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          Rotate Left
        </button>
        <button type="button" class="btn btn-secondary">
          Move
        </button>
        <button type="button" class="btn btn-secondary">
          Rotate Right
        </button>
      </div>
      <br></br>
      <br></br>
      <Link to={"/"}>back</Link>
    </article>
  );
};

export default Robot;
