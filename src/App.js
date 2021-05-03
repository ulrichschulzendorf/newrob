import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Robots from "./components/Robots";
import Robot from "./components/Robot";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";
const axios = require("axios").default;

const App = (props) => {
  // const { name } = useParams();
  // console.log(name);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      axios
        .get("http://localhost:3001/robots")
        .then((resp) => setRobots(resp.data));
    } catch (error) {
      console.log(error);
    }
  };

  // const addRobot = (robotName) => {

  //   const robotsCount = robots.length;
  //   const newRobot = {
  //     id: robotsCount,
  //     slug: robotName,
  //     name: robotName,
  //     posX: 0,
  //     posY: 0,
  //     heading: "NORTH",
  //   };
  //   createRobot([...robots, newRobot]);
  //   console.log(robots);
  // };

  const addRobot = async (robotName) => {
    try {
      axios
        .put("http://localhost:3001/create", {
          name: robotName,
        })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Robots robots={robots} addRobot={addRobot} />}
          />
          <Route
            path="/robot/:name"
            render={(props) => {
              //
              const robot = robots.find(
                (robot) => robot.name == props.match.params.name
              );
              console.log(props);
              console.log(robots);
              console.log(props.match.params);
              console.log(props.match.params.name);
              if (robot) return <Robot robot={robot} />;
              else return <NotFound />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
