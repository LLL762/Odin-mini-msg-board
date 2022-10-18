const express = require("express");
const MessageRepo = require("../repo/message-repo");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await MessageRepo.getAllMsg();

  res.render("index", { title: "Express", messages: messages });
});

module.exports = router;
