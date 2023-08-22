const mongoose=require('mongoose');
const busSchema=new mongoose.Schema({
    bus_name:{
        type:String,
        trim:true,
        required:[true,'bus name is required'],
    },
    routeName:{
        type : String,
        // ref:'Route',
        require:[true,"route Name is Required"],
        trim:true,
        
    },
    availableSeats:{
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
        // default: Date.now(),
    },
    // ofDates:{
    //     type:Array,
    // }
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
// date:{
//     type:Date,
//     default: Date.now(),
// },