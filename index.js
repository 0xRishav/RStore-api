const express = require("express");
var cors = require("cors");
const { router: productRouter } = require("./routes");
const bodyParser = require("body-parser");

const db = require("./config/mongoose");

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("RStore API");
});

app.listen(port, () => {
  console.log(`express server is running at https://localhost:${port}`);
});
