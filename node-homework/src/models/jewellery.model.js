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

    },{timestamps: true,autoCreate: false}
)
const Jewellery=mongoose.model('jewellery',jewellerySchema);
module.exports=Jewellery;