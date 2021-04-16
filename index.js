const express = require("express");
var cors = require("cors");
const { router: productRouter } = require("./routers");

const app = express();

const port = process.env.PORT || 8000;

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("RStore API");
});

app.listen(port, () => {
  console.log(`express server is running at https://localhost:${port}`);
});
