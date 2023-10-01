const mongoose = require("mongoose");
const schoolSchema=new mongoose.Schema(
  {
    // School Name
    sch_name: {
      type: String,
      required: true,
    },
    // Address of the school
    address: {
      type: String,
      require: true,
    },
    // Phone number for contacting the school
    phone_no: {
      type: Number,
      unique: false,
    },
    // Email id to reach out to the school
    email_id: {
      type: String,
      unique: false,
    },
   
    // Average rating of the school from 1-5 stars
    avgRating: {
      type: Number,
    },is_active:{
      type:Boolean,
      default:true,
  },
   // Website link for the school [to my  understand]
    // websiteLink: {
    //   type: String,
    // //   default: "https://www.google.com/",
    // },
    
  },
  { timestamps: true }
)
const School=mongoose.model('school',schoolSchema);
module.exports=School;
