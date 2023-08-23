const mongoose=require('mongoose');
const busSchema=new mongoose.Schema({
    bus_name:{
        type:String,
        trim:true,
        required:[true,'bus name is required'],
    },
    route_name:{
        type : String,
        // ref:'Route',
        require:[true,"route Name is Required"],
        trim:true,
    },
    available_seats:{
        type:Number,
        minlength:-1,
        maxlength:+999999999 ,  
        default:254,
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
     arrival_time:{
        type: Date,
        default: null,
     },is_active:{
        type:Boolean,
        default:true,
    },
    },
    {timestamps: true,autoCreate: false},
    );
    
    const Bus=mongoose.model('bus',busSchema);
    module.exports=Bus;
    // farePerKm:{
    //     type:Number,
    //     default:0,
    // },
    // dropOff:{
        //     type:String,
        //     trim:true,
        // },
        // passenger_name:{
            //     type:Array,
            //     },
            //     contactNo:{
                //         type: Array,
                //     },
                //     emailId:{
                    //         type: Array,
                    //     },
                    //     address:{
    //         type: Array,
    //     },
    // ofDates:{
    //     type:Array,
    // }
