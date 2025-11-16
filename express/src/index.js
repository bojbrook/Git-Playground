const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/example1", (req, res) => {
  res.send("example 1");
});

app.get("/example2", (req, res) => {
  res.send("example 2");
});

app.get("/example3", (req, res) => {
  res.send("example 3");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
