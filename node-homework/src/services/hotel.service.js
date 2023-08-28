const {Hotel}=require('../models');
/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
// create Hotel
const createHotel=async(reqBody)=>{
    return Hotel.create(reqBody);
};

// get list hotel service
const getHotelList=async(req,res)=>{
    // return Hotel.find();
    return Hotel.find({$or:[{is_active:false}]});
}
// get list hotel by id
const getHotelById=async(hotelId)=>{
    return Hotel.findById(hotelId);
}
// delete hotel
const deleteHotel=async(hotelId)=>{
    return Hotel.findByIdAndDelete(hotelId)
}

// update hotel
const updateHotel=async(hotelId,updateBody)=>{
    return await  Hotel.findOneAndUpdate({'id':hotelId},{$set:{...updateBody}},{new :true});
}
module.exports={
    createHotel,
    getHotelList,
    getHotelById,
    deleteHotel,
    updateHotel
};