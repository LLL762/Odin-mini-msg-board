const express = require("express");

const FormController = (() => {
  const uri = "/new";
  const router = express.Router();

  router.get(uri, function (req, res, next) {
    res.render("form", { title: "Express" });
  });

  const getUri = () => uri;
  const getRouter = () => router;

  return { getUri, getRouter };
})();

module.exports = FormController;
