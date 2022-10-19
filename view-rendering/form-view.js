const { RouteConfigs } = require("../configs/routes-configs");

const FormView = (message, errors) => {
  const msgUserKey = "user";
  const msgTextKey = "text";

  const render = (response) => {
    response.render("form", {
      formUri: RouteConfigs.getNewUri(),
      title: "Express",
      msgUser: msgUserKey,
      msgText: msgTextKey,
      message: message,
      errors: errors,
    });
  };

  return { render };
};

module.exports = { FormView };
