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
      const errors = validationResult(req);
      const body = req.body;
      const msg = new msgModel(body);

      if (!errors.isEmpty()) {
        FormView(msg, errors.array(0)).render(res);

        return;
      }

      messageRepo.createMsg(msg);
      res.redirect("/");
    }
  );

  const getUri = () => uri;
  const getRouter = () => router;

  return { getUri, getRouter };
})();

module.exports = FormController;
