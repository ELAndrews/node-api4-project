import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("/api/welcome")
      .then(name => {
        setName(name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className="App">{name}</div>;
}

export default App;
