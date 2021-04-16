const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`express server is running at https://localhost:${port}`);
});
