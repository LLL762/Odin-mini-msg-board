const RouteConfigs = (() => {
  const newUri = "/new";
  const messagesUri = "/messages";

  const getNewUri = () => newUri;
  const getMessagesUri = () => messagesUri;

  return { getNewUri, getMessagesUri };
})();

module.exports = { RouteConfigs };
