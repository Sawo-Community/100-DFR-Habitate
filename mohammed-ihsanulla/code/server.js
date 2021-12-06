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
  var roles;
  // get admin all permissions
  await axios
    .get("http://localhost:5000/api/roles?name=admin")
    .then((responese) => {
      roles = responese.data;
    })
    .catch((err) => res.json(err));
  res.render("index", { title: "Admin", roles: roles });
});

server.listen(5000);
