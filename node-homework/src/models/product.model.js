const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        product_name:{
            type:String,
            required:[true,'Please enter the name of your product']
        },
       product_price:{type : Number},
        product_description:{type : String},
        // imagePath:{type : String},
        // categoryId:{type : mongoose.Types.ObjectId},
       product_brand_name:{type : String},
        product_quantity_in_stock:{type :Number},
        product_rating:{type : Number},
        product_num_reviews:{type : Number},
        product_isfeatured:{type : Boolean},
        // createdAt:{type : Date},
        // updatedAt:{type :Date},
        // deletedAt:{type : Date},
        product_status:{type :Boolean},
        // soldCount:{type : Number},
        // totalSoldPrice:{type : Number},
        // discountedPrice:{type : Number},
        product_discountPercentage:{type : Number},
        // sellerId:{type : mongoose.Types.ObjectId},
        // buyersId:{type : Array},
        // reviews:{type :Array},
        // comments:{type :Array},
        // tags:{type :Array},
        // ratings:{type :Object},
        // shippingDetails:{type : Object},
        // attributes:{type : Array},
        // specifications:{type : Array},
        product_colors:{type : Array},
        // sizes:{type : Array},
        // colorImages:{type : Array},
        // sizeImages:{type : Array},
        // images:{type : Array},
        variants:{type : Array},
        isDeleted:{type : Boolean}
        },
        {timestamps: true},{collection:''}//database collection name    
);
const Product=mongoose.model("products",productSchema);
module.exports= Product;