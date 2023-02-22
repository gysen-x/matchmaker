const React = require("react");
const Header = require("./Header");
const Footer = require("./Footer");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matchmaker</title>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/creatematch.css" />
        <script defer src="/js/client.js" />
        <script defer src="/js/slider.js" />
        <script defer src="/js/createMatch.js" />
        <script defer src="/js/profile.js" />
        <script defer src="/js/tableMatch.js" />
        <script defer src="/js/contacts.js" />
      </head>
      <body>
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
