const RouteConfigs = (() => {
  const newUri = "/new";

  const getNewUri = () => newUri;

  return { getNewUri };
})();

module.exports = { RouteConfigs };
