const mongoose=require('mongoose');
const jewellerySchema= new mongoose.Schema(
    {
        j_name:{
            type:String,
            required:[true,'Please add a name']
        },
        price:{
            type:Number,
            default:'0',
        },
        description:{
            type: String,
        },
        address:{
            type :String,
        },
        category_name:{
            type:String,
            ref:"Category",
        },
        quantity:{
            type: Number,
        },
        available_stock:{
            type:Boolean,
        },
        item_name:{
            type:String,
        }, 
        is_active:{
            type:Boolean,
            default:true,
        },
    },{timestamps: true}
)
const Jewellery=mongoose.model('jewellery',jewellerySchema);
module.exports=Jewellery;