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

  const keys = ["user", "text"].sort();

  const validateBodyKeys = (body) => {
    if (!body) {
      return false;
    }

    const bodyKeys = Object.keys(body).sort();
    console.log(bodyKeys);

    if (keys.length != bodyKeys.length) {
      return false;
    }
    for (const [i, key] of keys.entries()) {
      if (key !== bodyKeys[i]) {
        return false;
      }
    }
    return true;
  };

  const getSchema = () => schema;

  return { getSchema, validateBodyKeys };
};

module.exports = { FormValidator };
