const express = require("express");
const routes = express.Router();
const { blogController } = require("../controller/index");
// const { auth } = require("../middleware/auth");

routes.post("/register", blogController.register);
routes.post("/login", blogController.login);
routes.get("/allusers", blogController.getAllUser);

module.exports = routes;