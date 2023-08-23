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
    maxlength:[10,"description must be less than or equal to 25 characters"],
    minlength:[3,'description should not be empty'],
},
// email of trip
email:{
    type:String,
    unique:false,
    lowercase:true,
},
// phone number for contacting the user
phoneNo:{
    type:Number,
    trim:true,
},is_active:{
    type:Boolean,
    default:true,
},
},{timestamps: true,autoCreate: false});
const Travel=mongoose.model('travel',travelSchema);
module.exports=Travel;