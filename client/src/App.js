import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

function App(props) {
  const [welcome, setWelcome] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = e => {
    props.history.push(`/api/welcome?name=${name}`);
    window.location.reload();
  };

  return (
    <div className="App">
      <div>
        <p>Hey there</p>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Hello?</button>
      </div>
    </div>
  );
}

export default withRouter(App);
