/* 
You have to change the initial values on package.json
The initial values on JSON file, concrete in scripts, are =>
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

WE HAVE TO CHANGES IT ON => 
"scripts": {
    "dev": "node server1.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  },
*/

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/chicken") {
      app.render(req, res, "/contact", query);
    } else {
      handle(
        req,
        res,
        parsedUrl
      ); /* IMPORTANT!!!. The most important route if you comment this part of the code, next don't do anything */
    }

    // if (pathname === '/a') {
    //   app.render(req, res, '/a', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/b', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
