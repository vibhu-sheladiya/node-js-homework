const {Jewellery}=require('../models');
/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
// create travel
const createJewellery=async(reqBody)=>{
    return Jewellery.create(reqBody);
};

// get list travel service
const getJewelleryList=async(req,res)=>{
    return Jewellery.find();
}
// get list Travel by id
const getJewelleryById=async(jewelleryId)=>{
    return Jewellery.findById(jewelleryId);
}
// delete Travel
const deleteJewellery=async(jewelleryId)=>{
    return Jewellery.findByIdAndDelete(jewelleryId)
}
module.exports={
    createJewellery,
    getJewelleryList,
    getJewelleryById,
    deleteJewellery
};