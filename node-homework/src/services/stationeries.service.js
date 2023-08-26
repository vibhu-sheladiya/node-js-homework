const {Stationery}=require('../models');
// create music
const createStationery=async(reqBody)=>{
    return Stationery.create(reqBody);
}
// get list music 
const getStationeryList=async(req,res)=>{
    // return Stationery.find();
    return Stationery.find({$or:[{is_active:false}]});
}
// // get list id music
const getStationeryById=async(stationeryId)=>{
    return Stationery.findById(stationeryId);
 }

// delete music
const deleteStationery=async(stationeryId)=>{
    return Stationery.findByIdAndDelete(stationeryId);
}

module.exports={
    createStationery,
    getStationeryList,
    getStationeryById,
    deleteStationery
}