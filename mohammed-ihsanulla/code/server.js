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

// =========================================================================ADMIN VIEW============================================================================
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
  res.render("index", { title: "Admin", roles: roles, editmode: false });
});

// =========================================================================MODERATOR VIEW============================================================================
server.get("/moderator", async (req, res) => {
  var roles;
  // get availabe moderator user permissions
  await axios
    .get("http://localhost:5000/api/roles?name=moderator")
    .then((responese) => {
      roles = responese.data;
      // res.json(roles);
    })
    .catch((err) => res.json(err));
  res.render("index", {
    title: "Moderator",
    roles: roles,
    editmode: false,
  });
});

server.get("/moderator/edit", async (req, res) => {
  var roles;
  var permissions;
  // get all admin user permissions
  await axios
    .get("http://localhost:5000/api/roles?name=moderator")
    .then((responese) => {
      roles = responese.data;
    })
    .catch((err) => res.json(err));

  // get all list of permissions
  await axios
    .get("http://localhost:5000/api/permissions")
    .then((responese) => {
      permissions = responese.data;
    })
    .catch((err) => res.json(err));
  res.render("index", {
    title: "Edit Moderator",
    roles: roles,
    editmode: true,
    permissions: permissions,
  });
});

server.patch("/moderator/edit", async (req, res) => {
  const ispermission = { ispermission: req.body.permissions };
  await axios.patch("http://localhost:5000/api/roles/2", ispermission);
  res.redirect("/");
});

// =========================================================================MARKETING VIEW============================================================================
server.get("/marketing", async (req, res) => {
  var roles;
  // get availabe admin user permissions
  await axios
    .get("http://localhost:5000/api/roles?name=marketing")
    .then((responese) => {
      roles = responese.data;
      // res.json(roles);
    })
    .catch((err) => res.json(err));
  res.render("index", {
    title: "Marketing",
    roles: roles,
    editmode: false,
  });
});

server.get("/marketing/edit", async (req, res) => {
  var roles;
  var permissions;
  // get all admin user permissions
  await axios
    .get("http://localhost:5000/api/roles?name=marketing")
    .then((responese) => {
      roles = responese.data;
    })
    .catch((err) => res.json(err));

  // get all list of permissions
  await axios
    .get("http://localhost:5000/api/permissions")
    .then((responese) => {
      permissions = responese.data;
    })
    .catch((err) => res.json(err));
  res.render("index", {
    title: "Edit Marketing",
    roles: roles,
    editmode: true,
    permissions: permissions,
  });
});

server.patch("/marketing/edit", async (req, res) => {
  const ispermission = { ispermission: req.body.permissions };
  await axios.patch("http://localhost:5000/api/roles/3", ispermission);
  res.redirect("/marketing");
});
// =========================================================================MEMBER VIEW============================================================================
server.get("/member", async (req, res) => {
  res.render("index", {
    title: "Member",
    roles: [],
    editmode: false,
  });
});
server.listen(5000);
