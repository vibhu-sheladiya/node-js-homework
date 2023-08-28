const {Stationery}=require('../models');
// create Stationery
const createStationery=async(reqBody)=>{
    return Stationery.create(reqBody);
}
// get list Stationery 
const getStationeryList=async(req,res)=>{
    // return Stationery.find();
    return Stationery.find({$or:[{is_active:false}]});
}
// // get list id Stationery
const getStationeryById=async(stationeryId)=>{
    return Stationery.findById(stationeryId);
 }

// delete Stationery
const deleteStationery=async(stationeryId)=>{
    return Stationery.findByIdAndDelete(stationeryId);
}

// update Stationery
const updateStationery=async(stationeryId,updateBody)=>{
    return await Stationery.findByIdAndUpdate(stationeryId,{...updateBody});
}

module.exports={
    createStationery,
    getStationeryList,
    getStationeryById,
    deleteStationery,
    updateStationery
}