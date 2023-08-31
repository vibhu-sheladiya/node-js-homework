const mongoose=require('mongoose');
const hotelSchema= new mongoose.Schema(
    {
        // Hotel Name
        name: {
            type: String,
            required: true,
        },
        // Phone Number Hotel
        phone: {
            type: String,
            required: true,
            // unique: true,
        },
        // Email Hotel
        email: {
            type: String,
            required: true,
            // unique: true,
        },
        address:{
                type:String ,
                default:'',
            },
     city_name  :{
                type:String,
                trim:true,
            },
        price:{
            type:Number,
            minlength:[1],
            trim   :true,
        },
        feature:{
            type:String,
            trim   :true,
        },
        // Type of Room: single, double etc [to my understand]
        // room_type: {
        //     type: String,
        //     default: null
        // },
        // Check in date-time
        check_in: {
            type: String,
            default: null
        },
        // Check out date-time
        check_out: {
            type: String,
            default: null
        },
        // Date-time of booking
        booking_time: {
            type: String,
            default: null
        },
        // Active, in-active, booked, waiting
        status: {
            type: String,
            // default: "inactive"
        },
       
    is_active:{
            type:Boolean,
            default:true,
        },
    }, {
        timestamps: true,
    });
    const Hotel=mongoose.model('hotel',hotelSchema);
    module.exports=Hotel;
    
