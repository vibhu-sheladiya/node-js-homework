const mongoose = require("mongoose");
const categoryScheme = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
      required: [true, "please enter a name"],
    },
    category_desc: {
      type: String,
      trim: true,
      maxlength: [50, "maximum length is 25 characters"],
    },
    // image:{
    //         data: Buffer,
    //         contentType: String
    //   }
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("categorys", categoryScheme);
module.exports = Category;
