const { Blog } = require("../model");

const createBlog = async (body) => {
  return await Blog.create(body);
};

const findBlogByEmail = async (email) => {
  return await Blog.findOne(email);
};

const findBlogAndUpdate = async (_id, token) => {
  return await Blog.findByIdAndUpdate(
    { _id },
    {
      $set: { token },
    },
    { new: true }
  );
};

const getAllBlog = async (role) => {
  return await Blog.find(role);
};

module.exports = {
    createBlog,
    findBlogByEmail,
    findBlogAndUpdate,
    getAllBlog,
};