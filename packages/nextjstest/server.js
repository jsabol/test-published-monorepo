const express = require("express");
const next = require("next");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Everything else goes to Next
  server.get("*", (req, res) => {
    // Require a trailing slash
    if (!req.url.endsWith("/")) {
      res.redirect(`${req.url}/`);
      return;
    }

    // But don't tell Next we did that :)
    // Obviously replaceing / when the url is / would be dumb
    if (req.url.length > 1) {
      req.url = req.url.replace(/\/$/, "");
    }
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://127.0.0.1:${port}`);
  });
});
