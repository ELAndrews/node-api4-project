import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [welcome, setWelcome] = useState("");
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = e => {
    axios
      .get(`/api/welcome?name=${name}`)
      .then(welcome => {
        setWelcome(welcome);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <input type="text" name="name" onChange={handleChange} />
      <button onClick={handleClick}>Hello?</button>
      {welcome}
    </div>
  );
}

export default App;
