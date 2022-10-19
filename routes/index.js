const express = require("express");
const { MessageRepo } = require("../repo/message-repo");

const FormController = require("./new");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const msgRepo = MessageRepo();
  const messages = await msgRepo.getAllMsg();
  const formLink = FormController.getUri();

  res.render("index", {
    formLink: formLink,
    title: "Express",
    messages: messages,
  });
});

module.exports = router;
