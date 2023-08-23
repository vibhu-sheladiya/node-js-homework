const mongoose=require('mongoose');
const stationerySchema=new mongoose.Schema(
    {
        stat_name:{
            type:String,
            trim:true,
        },
        item_code:{
            type:String ,
            trim:true,
        },
        item_name:{
            type: String,
            trim:true,  
        },
        description :{
            type: String,
            trim:true,
        },
        category_name:{
            type:String,
            trim:true,
        },
        unit_name:{
            type:String,
            trim:true,
        },
        quantity:{
            type:Number,
        },
        price:{
            type: Number,
        },
        stock_quantity:{
            type:Number,
        },
        in_stock:{
            type:Boolean,
        },
    },{timestamps:true,autoCreate:false}
)
const Stationery=mongoose.model('stationery',stationerySchema);
module.exports =Stationery;