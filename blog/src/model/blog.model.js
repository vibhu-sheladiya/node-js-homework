import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title required"],
      unique: false,
    },
    description: {
      type: String,
      required: [true, "Blog description required"],
    },
    image: String,
    tags: {
      type: Array,
      required: false,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("blog", blogSchema);