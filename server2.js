/* 
1. The first thing you have to do is install express

2. Change the package json with => 
"scripts": {
    "dev": "node server2.js",
    "build": "next build",
    "start": "NODE_ENV=production node server2.js"
  },

Instead of => 
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

3. Read and Follow the construction of this "server2.js" file
*/

const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example of custom route
  //   server.get("/lol", (req, res) => {
  //     res.send("You've hit LOL!!!");
  //   });

  // Our final custom with params URL
  server.get("/p/:id", (req, res) => {
    app.render(req, res, "/post", { id: req.params.id });
  });

  // If you type a route in this server "handle" a "next" route
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (error) => {
    if (error) throw error;
    console.log("Now serving on localhosta:3000");
  });
});
