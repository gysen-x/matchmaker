const React = require("react");
const ReactDOMServer = require("react-dom/server");

const renderComponent = (component, props, res) => {
  const reactComponent = React.createElement(component, props);
  const markUp = ReactDOMServer.renderToStaticMarkup(reactComponent);
  res.send(`<!DOCTYPE html> ${markUp}`);
};

module.exports = renderComponent;
