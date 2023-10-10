const { Blog } = require("../model");

const createBlog = async (body) => {
  return await Blog.create(body);
};

const findBlogById = async (blogId) => {
  return await Blog.findById(blogId);
};

const findBlogAndUpdate = async (blogId, updateBody) => {
  return await Blog.findByIdAndUpdate(
    { blogId },
    {
      $set: { ...updateBody },
    },
    { new: true }
  );
};

const getAllBlog = async (req, res) => {
  return await Blog.find();
};

module.exports = {
  createBlog,
  findBlogById,
  findBlogAndUpdate,
  getAllBlog,
};
