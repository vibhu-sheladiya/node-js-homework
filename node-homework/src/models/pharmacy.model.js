const mongoose=require('mongoose');
const pharmacySchema=new mongoose.Schema(
    {
        phrm_name:{
            type:String,
            required:[true,'phrm name is Required']
        },
        // address:{
        //     type: String
        // },
        // phoneNo :{
        //     type:Number ,
        //     unique: true
        // },
        // emailId:{
        //     type:String,
        //     trim:true,
        //     lowercase:true,
        // },
        product_name:{
            type:String,
        },
        // quantity:{
        //     type: Number,
        // },
        // pricePerUnit:{
        //     type:Number,
        // },
        totalPrice:{
            type:Number,
        },
    //     dateOfPurchased:{
    // type:Date,
    //     },
        status:{
            // default:'pending',
            type:String,
        },
        is_active:{
            type:Boolean,
            default:false,
        },
        is_active:{
            type:Boolean,
            default:true,
        },
    //     brand_name:{
    //         type:String,
    //     }


    },{timestamps:true,autoCreate:true}
);
const Pharmacy=mongoose.model('pharmacy',pharmacySchema);
module.exports =Pharmacy;