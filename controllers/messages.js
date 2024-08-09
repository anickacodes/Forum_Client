const express = require("express");
const message = express.Router();

const messagesArr = require("../model/message");

message.get("/", async (req, res) => {
  res.json(messagesArr);
});

message.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundmessage = messagesArr.find(
    (message) => message.id.toString() === id
  );

  if (foundmessage) {
    res.json(foundmessage);
    console.log("excuse", foundmessage);
  } else {
    res.status(404).json("no id matching");
  }
});


module.exports = message