const { Message } = require("../model/message");

const MessageRepo = (() => {
  const msgModel = Message.getMsgModel();

  const getAllMsg = () => {
    return msgModel.find({});
  };

  const createMsg = (message) => {
    message.save((err) => {
      console.log(err);
    });
  };

  return { getAllMsg, createMsg };
})();

module.exports = MessageRepo;