const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const messagesController = require("./controllers/messages");


app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use('/messages', messagesController);



app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Forum Server");
});

app.get("*", (req, res) => {
  res.status(404).send("404 ERROR Page not found");
});

module.exports = app;
