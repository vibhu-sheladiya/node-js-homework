const mongoose=require('mongoose');
const busSchema=new mongoose.Schema({
    bus_name:{
        type:String,
        trim:true,
        required:[true,'bus name is required'],
    },
    route_name:{
        type : String,
        require:[true,"route Name is Required"],
        trim:true,
    },
    available_seats:{
        type:Number,
    },
    status:{
        type:Boolean,
        default:false,
    },
    pickup:{
        type:String,
        trim:true,
    },
    price:{
        type: Number,
        default:true,
        trim:true,
    },
    date:{
        type:Date,
        default:null,
    },
    bus_number:{
        type:String,
        unique: true,
        trim:true,
    },
    driver_name:{
        type:String,
        trim:true,
     },
   
     is_active:{
        type:Boolean,
        default:true,
    }
    },
    {timestamps: true}
    );
    
    const Bus=mongoose.model('bus',busSchema);
    module.exports=Bus;