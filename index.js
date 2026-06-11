require("dotenv").config();
const { validateEnv } = require("./config/env");
validateEnv();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./routes");
const db = require("./config/mongoose");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 9000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", router);

app.get("/", (req, res) => {
  res.send("RStore API");
});

app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`express server is running at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => db.close(false).then(() => process.exit(0)));
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  server.close(() => db.close(false).then(() => process.exit(0)));
});
