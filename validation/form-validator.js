const FormValidator = () => {
  const shema = {
    msgText: {
      isLength: {
        errorMessage: "at least 7 characters",
        options: { min: 7 },
      },
    },
  };

  const getSchema = () => shema;

  return { getSchema };
};

module.exports = { FormValidator };
