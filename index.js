require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("./client/build"));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get(`/api/welcome`, (req, res) => {
  res.json(`Hello ${req.query.name}!, how are you today?`);
});

app.use((req, res) => {
  res.json(`The API is active! YAY!`);
});

app.listen(port, () => {
  console.log(`*** Server Listening on ${port} ***`);
});
