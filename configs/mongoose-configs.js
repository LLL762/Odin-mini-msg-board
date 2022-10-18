const mongoose = require("mongoose");

const MongooseConfigs = (() => {
  const mongoDbUrl = "mongodb://localhost:27017";
  const user = "root";
  const password = "root";
  const dbName = "messages";

  const init = () => {
    mongoose.set("debug", true);

    mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: user,
      pass: password,
      dbName: dbName,
    });
  };
  return { init };
})();

module.exports = { MongooseConfigs };
