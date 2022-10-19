const express = require("express");
const { Message } = require("../model/message");
const { checkSchema, validationResult } = require("express-validator");
const { FormValidator } = require("../validation/form-validator");
const { FormView } = require("../view-rendering/form-view");
const { RouteConfigs } = require("../configs/routes-configs");
const { MessageRepo } = require("../repo/message-repo");

const FormController = (() => {
  const uri = RouteConfigs.getNewUri();
  const router = express.Router();
  const msgModel = Message.getModel();
  const validator = FormValidator();
  const messageRepo = MessageRepo();

  router.get(uri, function (req, res, next) {
    FormView().render(res);
  });

  router.post(
    uri,
    checkSchema(validator.getSchema()),
    async (req, res, next) => {
      try {
        const errors = validationResult(req);
        const body = req.body;
        const msg = new msgModel(body);

        if (!validator.validateBodyKeys(body)) {
          res.status(400);
          res.send("no!");
          return;
        }

        if (!errors.isEmpty()) {
          res.status(400);
          FormView(msg, errors.array(0)).render(res);
          return;
        }

        messageRepo.createMsg(msg);
        res.status(201);
        res.redirect("/");
      } catch (err) {
        res.status(500);
        res.render("500");
      }
    }
  );

  const getUri = () => uri;
  const getRouter = () => router;

  return { getUri, getRouter };
})();

module.exports = FormController;
