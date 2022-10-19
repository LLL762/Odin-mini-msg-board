const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = (() => {
  const schema = new Schema(
    {
      text: {
        type: String,
        required: true,
      },
      user: {
        type: String,
        required: true,
      },
      added: {
        type: Date,
        default: Date.now,
      },
    },
    { collection: "messages" }
  );

  const MsgModel = mongoose.model("message", schema);

  const getModel = () => MsgModel;
  const getSchema = () => schema;

  return { getModel, getSchema };
})();

module.exports = { Message };
