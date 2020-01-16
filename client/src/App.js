import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    axios
      .get("/api/welcome?name=nick")
      // .then(res => res.json())
      .then(welcome => {
        setWelcome(welcome);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {welcome}
      <div>
        <h2>Hey there</h2>
      </div>
      <input type="text" name="name" />
      THIS ISNT WORKING
    </div>
  );
}

export default App;
