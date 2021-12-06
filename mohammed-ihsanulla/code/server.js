const express = require("express");
const jsonServer = require("json-server");
const dbrouter = jsonServer.router("db.json");
const axios = require("axios");
const server = express();

// mount JSON Server on a specific end-point, for example /api
// http://localhost:5000/api/roles
// http://localhost:5000/api/permissions
server.use("/api", dbrouter);

// specify your view engine like ejs, pug, handlebars, etc...,
server.set("view engine", "ejs");

// entry point of host
server.get("/", async (req, res) => {
  res.render("index");
});

server.listen(5000);
