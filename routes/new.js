const express = require("express");
const { Message } = require("../model/message");
const { checkSchema, validationResult } = require("express-validator");
const { FormValidator } = require("../validation/form-validator");

const FormController = ((messageRepo) => {
  const uri = "/new";
  const router = express.Router();
  const msgModel = Message.getModel();
  const validator = FormValidator();

  router.get(uri, function (req, res, next) {
    res.render("form", { formUri: uri, title: "Express" });
  });

  router.post(
    uri,
    checkSchema(validator.getSchema()),
    async (req, res, next) => {
      const errors = validationResult(req);

      console.log(errors);

      res.redirect("/");
    }
  );

  const getUri = () => uri;
  const getRouter = () => router;

  return { getUri, getRouter };
})();

module.exports = FormController;
