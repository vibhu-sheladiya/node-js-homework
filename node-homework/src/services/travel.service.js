const {Travel}=require('../models');
/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
// create travel
const createTravel=async(reqBody)=>{
    return Travel.create(reqBody);
};

// get list travel service
const getTravelList=async(req,res)=>{
    // return Travel.find();
    return Travel.find({$or:[{is_active:false}]});
}
// get list Travel by id
const getTravelById=async(travelId)=>{
    return Travel.findById(travelId);
}
// delete Travel
const deleteTravel=async(travelId)=>{
    return Travel.findByIdAndDelete(travelId)
}
module.exports={
    createTravel,
    getTravelList,
    getTravelById,
    deleteTravel
};