const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hey Murali!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
