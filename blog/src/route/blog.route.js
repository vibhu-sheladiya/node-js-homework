const express = require("express");
const routes = express.Router();
const { blogController } = require("../controller/index");
// const { auth } = require("../middleware/auth");

routes.post("/create", blogController.createBlog);
routes.post("/id", blogController.getDetailById);
routes.get("/list", blogController.getDetails);
routes.get("/upload", blogController.multipleBlog);
routes.get("/update", blogController.updateBlog);

module.exports = routes;