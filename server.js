const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// omit cors errors
app.use(cors());

let robotFactory = [
  {
    id: 0,
    name: "Bob",
    posX: 0,
    posY: 0,
    heading: "north",
  },
];

// write function, which adds a json object with the robot name and the default position/heaing to the robotFactory Array
createRobot = (robotName) => {
  const id = robotFactory.length;
  robotFactory.push({
    id: id,
    name: robotName,
    posX: 0,
    posY: 0,
    heading: "north",
  });
};

//CREATE A ROBOT

// write a functions which finds a robot by id and changes his direction clockwise
turnRight = (id) => {
  const robot = robotFactory.find((element) => element.id === id);
  let heading = robot.heading;

  switch (heading) {
    case "north":
      robot.heading = "east";
      break;
    case "east":
      robot.heading = "south";
      break;
    case "south":
      robot.heading = "west";
      break;
    case "west":
      robot.heading = "north";
      break;
    default:
      null;
      break;
  }
};

// write a functions which finds a robot by id and changes his direction anti-clockwise
turnLeft = (id) => {
  const robot = robotFactory.find((element) => element.id === id);
  let heading = robot.heading;
  switch (heading) {
    case "north":
      robot.heading = "west";
      break;
    case "east":
      robot.heading = "north";
      break;
    case "south":
      robot.heading = "east";
      break;
    case "west":
      robot.heading = "south";
      break;
    default:
      null;
  }
};

// write a functions which finds a robot by id and changes his position one step forward
moveForward = (id) => {
  let robot = robotFactory.find((element) => element.id === id);
  let heading = robot.heading;

  switch (heading) {
    case "north":
      robot.posY++;
      break;
    case "east":
      robot.posX++;
      break;
    case "south":
      robot.posY--;
      break;
    case "west":
      robot.posX--;
      break;
    default:
      null;
  }
};

// fill out the middleware function, which responds with the entire robotFactory array
app.get("/robots", (req, res) => {
  res.send(robotFactory);
});

// write a middleware, which creates a new robot using the function createRobot. Read the name from the request body
app.put("/create", (req, res) => {
  // take in the name of the employee from req.body.name
  const robotName = req.body.name;
  createRobot(robotName);
  res.send(robotName);
});

// write a middleware, which rotates one robot right using the function rotateRight. Read the id from the request body
app.post("/right", (req, res) => {
  const robotId = req.body.id;
  const robot = robotFactory.find((element) => element.id === robotId);
  turnRight(robotId);
  res.send(robot);
});

// write a middleware, which rotates one robot left using the function rotateLeft. Read the id from the request body
app.post("/left", (req, res) => {
  const robotId = req.body.id;
  const robot = robotFactory.find((element) => element.id === robotId);
  turnLeft(robotId);
  res.send(robot);
});

// write a middleware, which moves the robot using the function moveRobot. Read the id from the request body
app.post("/move", (req, res) => {
  const robotId = req.body.id;
  const robot = robotFactory.find((element) => element.id === robotId);
  moveForward(robotId);
  res.send(robot);
});

app.listen(port, () => {
  console.log(`Eddy is listening for commands at http://localhost:${port}`);
});
