const express = require("express");
const faker = require("faker");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("RStore API");
});

app.listen(port, () => {
  console.log(`express server is running at https://localhost:${port}`);
});
