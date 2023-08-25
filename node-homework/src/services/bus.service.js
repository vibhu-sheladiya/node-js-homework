const{Bus}=require('../models');

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => Bus.create(reqBody);

/**get bus list */
const getBusList=async(req,res)=>{
    return Bus.find({$or:[{is_active:false}]});
}
/**get list bus service */
const getBusById=async(busId)=>{
    return Bus.findById(busId);
};

//**delete bus */
const deleteBus=async(busId)=>{
    return Bus.findByIdAndDelete(busId)
}

module.exports={
    createBus,
    getBusList,
    getBusById,
    deleteBus
};