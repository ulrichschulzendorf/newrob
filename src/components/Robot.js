import React from "react";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const Robot = ({ robot, update }) => {
  const turnLeft = async (robotID) => {
    try {
      axios
        .post("http://localhost:3001/left", { id: robotID })
        .then((resp) => update());
    } catch (error) {
      console.log(error);
    }
  };

  const turnRight = async (robotID) => {
    try {
      axios
        .post("http://localhost:3001/right", { id: robotID })
        .then((resp) => update());
    } catch (error) {
      console.log(error);
    }
  };
  const moveForward = async (robotID) => {
    try {
      axios
        .post("http://localhost:3001/move", { id: robotID })
        .then((resp) => update());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className="container">
      <h2></h2>
      <h1>{robot.name}'s position:</h1>
      <p>posX: {robot.posX}</p>
      <p>posY: {robot.posY}</p>
      <h2>{robot.name} is heading to:</h2>
      <p>{robot.heading}</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={() => turnLeft(robot.id)}
          type="button"
          class="btn btn-secondary"
        >
          Rotate Left
        </button>
        <button
          onClick={() => moveForward(robot.id)}
          type="button"
          class="btn btn-secondary"
        >
          Move
        </button>
        <button
          onClick={() => turnRight(robot.id)}
          type="button"
          class="btn btn-secondary"
        >
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
