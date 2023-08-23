const mongoose=require('mongoose');
const grocerySchema=new mongoose.Schema({
    gro_name:{
        type:String,
        required:[true,'Please enter the name of your Grocery'],
        trim:true,
    },
    total_price:{
        type : Number ,
        default:'0',
        },
        brand:{
            type: String,
        },
        price_per_unit:{
            type:Number,
        },
        available_stock:{
            type:Number,
        },
},{timestamps:true});
const Grocery=mongoose.model('grocery',grocerySchema);
module.exports=Grocery;