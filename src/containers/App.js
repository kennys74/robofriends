import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

export default function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.includes(event.target.value)
    );

    setRobots(filteredRobots);
  };

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={robots} />
      </Scroll>
    </div>
  );
}
