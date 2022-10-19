const express = require("express");
const { RouteConfigs } = require("../configs/routes-configs");
const ObjectId = require("mongoose").Types.ObjectId;

const MessagesController = (messageRepo) => {
  const router = express.Router();
  const uri = RouteConfigs.getMessagesUri();

  router.delete(uri + "/" + ":id", async (req, resp, next) => {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      resp.status(400);
      resp.send("Bad request");
      return;
    }

    const result = await messageRepo.deleteById(id);

    if (result.ok !== 1 || result.deleteCount !== 1) {
      resp.status(404);
      resp.send("Not found");
      return;
    }

    next();
  });

  const getRouter = () => router;

  return { getRouter };
};

module.exports = { MessagesController };
