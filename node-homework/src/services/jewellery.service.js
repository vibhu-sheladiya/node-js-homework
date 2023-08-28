const {Jewellery}=require('../models');
/**
 * Create Jewellery
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
// create Jewellery
const createJewellery=async(reqBody)=>{
    return Jewellery.create(reqBody);
};

// get list Jewellery service
const getJewelleryList=async(req,res)=>{
    // return Jewellery.find();
    return Jewellery.find({$or:[{is_active:false}]});
}
// get list Jewellery by id
const getJewelleryById=async(jewelleryId)=>{
    return Jewellery.findById(jewelleryId);
}
// delete Jewellery
const deleteJewellery=async(jewelleryId)=>{
    return Jewellery.findByIdAndDelete(jewelleryId)
}

// update Jewellery
const updateJewellery=async(jewelleryId,updateBody)=>{
    return await Jewellery.findByIdAndUpdate(jewelleryId,{...updateBody});
    // return await  Hotel.findOneAndUpdate({'id':hotelId},{$set:{...updateBody}});
}

module.exports={
    createJewellery,
    getJewelleryList,
    getJewelleryById,
    deleteJewellery,
    updateJewellery
};