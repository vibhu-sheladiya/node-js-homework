const {Grocery}=require('../models');
/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
// create Grocery
const createGrocery=async(reqBody)=>{
    return Grocery.create(reqBody);
};

// get list Grocery service
const getGroceryList=async(req,res)=>{
    return Grocery.find({$or:[{is_active:true}]});
}
// get list Grocery by id
const getGroceryById=async(groceryId)=>{
    return Grocery.findById(groceryId);
}
// delete Grocery
const deleteGrocery=async(groceryId)=>{
    return Grocery.findByIdAndDelete(groceryId);
}

// updte
const updateGrocery=async(groceryId,updateBody)=>{
    return await  Grocery.findOneAndUpdate({'id':groceryId},{$set:{...updateBody}}) ;
}
module.exports={
    createGrocery,
    getGroceryList,
    getGroceryById,
    deleteGrocery,
    updateGrocery
};