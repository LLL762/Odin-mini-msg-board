const express = require("express");
const { RouteConfigs } = require("../configs/routes-configs");

const MessagesController = (messageRepo) => {
  const router = express.Router();
  const uri = RouteConfigs.getMessagesUri();

  router.delete(uri + "/" + ":id", (req, resp, next) => {
    const id = req.params.id;

    messageRepo.deleteById(id);

    next();
  });

  const getRouter = () => router;

  return { getRouter };
};

module.exports = { MessagesController };
