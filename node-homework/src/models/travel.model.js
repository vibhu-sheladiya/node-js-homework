const mongoose=require('mongoose');
const travelSchema= new mongoose.Schema({
   // trip Name
   trip_name: {
    type: String,
    required: true,
    trim:true,
},
// start date 
start_date:{
    type : Date ,
    default :null,
    trim:true,
},
// end start 
end_date:{
    type :Date ,
    default : null,
    trim:true,
},
// description
description:{
    type:String,
   // maxlength:[10,"description must be less than or equal to 25 characters"],
    // minlength:[3,'description should not be empty'],
},
// email of trip
email:{
    type:String,
    unique:false,
    lowercase:true,
},
// phone number for contacting the user
phoneno:{
    type:Number,
    trim:true,
},bus:{
    type: mongoose.Types.ObjectId,
    ref: "bus",
 },
 hotel:{
    type: mongoose.Types.ObjectId,
    ref: "hotel",
 },
 user:{
    type: mongoose.Types.ObjectId,
    ref: "users",
 },
is_active:{
    type:Boolean,
    default:true,
},
},{timestamps: true});
const Travel=mongoose.model('travel',travelSchema);
module.exports=Travel;

