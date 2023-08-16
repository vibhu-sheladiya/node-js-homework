const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },password:{
        type :String,
    },is_active:{
        type:Boolean,
        default:true,
    },
  },

  { timestamps: true }
);

const User=mongoose.model("users",userScheme);
module.exports= User;

