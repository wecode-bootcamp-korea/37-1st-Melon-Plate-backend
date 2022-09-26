require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./src/routes");
const { database } = require("./src/models");
const { globalErrorHandler } = require("./src/middlewares");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static("uploads"));

app.get("/ping", (req, res, next) => {
  console.log(req.query);
  res.status(200).json({ message: "pong" });
});

app.all("*", (req, res, next) => {
  const err = new Error(`Can't fine ${req.originalUrl} on this server!`);

  err.statusCode = 404;

  res.status(statusCode).send();

  next(err);
});

app.use(globalErrorHandler);

const start = async () => {
  await database
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error(`Error during Data Source initialization, ${err}`);
    });

  app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
};

start();
