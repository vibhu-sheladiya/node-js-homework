const mongoose = require("mongoose");
const stationerySchema = new mongoose.Schema(
  {
    stat_name: {
      type: String,
      trim: true,
    },
    item_code: {
      type: String,
      trim: true,
    },
    item_name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    in_stock: {
      type: Boolean,
    },
   
    school:{
      type: mongoose.Types.ObjectId,
      ref: "school",
   },
    is_active: {
      type: Boolean,
      default: true,
    },
    // [to my understand]
    // category_name:{
    //     type:String,
    //     trim:true,
    // },
    // unit_name:{
    //     type:String,
    //     trim:true,
    // },
    // quantity:{
    //     type:Number,
    // },
    // stock_quantity:{
    //     type:Number,
    // },
  },
  { timestamps: true }
);
const Stationery = mongoose.model("stationery", stationerySchema);
module.exports = Stationery;
