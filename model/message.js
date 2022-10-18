const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = (() => {
  const schema = new Schema({
    text: String,
    user: String,
    added: Date,
  });

  const MsgModel = mongoose.model("message", schema);

  const getModel = () => MsgModel;

  return { getModel };
})();

module.exports = { Message };
