import React, { useState } from "react";
import { Link } from "react-router-dom";

const Robots = ({ robots, addRobot }) => {
  const [name, setName] = useState("");
  const createRobot = (event) => {
    event.preventDefault();
    addRobot(name);
    setName("");
  };
  return (
    <article className="container">
      <form className="container" onSubmit={createRobot}>
        <p>
          <input
            id="form-name"
            placeholder="How you want to name the Robot?"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </p>
        <p>
          <button type="submit" className="btn btn-light">
            Create
          </button>
        </p>
      </form>
      <h1>Your Robots:</h1>
      <ul>
        {robots.length < 1 && <li key="empty">No robots yet!</li>}
        {console.log(robots)};
        {robots.map((robot) => (
          <li key={robot.id}>
            <h2>
              <Link to={`/robot/${robot.slug}`}>{robot.name}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Robots;
