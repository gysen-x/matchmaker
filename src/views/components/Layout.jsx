const React = require('react');
const Header = require('./Header');

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matchmaker</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/client.js" />
        <script defer src="/js/slider.js" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
