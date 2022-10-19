const { Message } = require("../model/message");

const MessageRepo = () => {
  const msgModel = Message.getModel();

  const getAllMsg = () => {
    return msgModel.find({});
  };

  const createMsg = (message) => {
    message.save((err) => {
      console.log(err);
    });
  };

  const deleteById = (id) => {
    msgModel.deleteOne({ _id: id }, (err) => console.log(err));
  };

  return { getAllMsg, createMsg, deleteById };
};

module.exports = { MessageRepo };
