require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT;

// app.use("/img", express.static("uploads"))
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use((err, req, res, next)=> {
  console.log("====app.js에서의에러컨트롤",err)
  res.status(err.statusCode || 500).json({ message: err.message });
})

app.get("/ping", (req,res) => {
  res.status(200).json({"message" : "pong"});
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

start();