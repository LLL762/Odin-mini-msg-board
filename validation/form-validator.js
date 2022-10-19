const { Message } = require("../model/message");

const FormValidator = () => {
  const schema = {
    text: {
      isLength: {
        errorMessage: "message must have between 7 and 255 characters",
        options: { min: 7, max: 255 },
      },
    },
    user: {
      isLength: {
        errorMessage: "user must have between 2 and 15 characters",
        options: { min: 2, max: 15 },
      },
    },
  };

  const keys = ["user", "password"];

  const getSchema = () => schema;

  return { getSchema };
};

module.exports = { FormValidator };
