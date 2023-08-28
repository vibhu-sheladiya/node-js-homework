const {Pharmacy}=require('../models');
// create Pharmacy
const createPharmacy=async(reqBody)=>{
    return Pharmacy.create(reqBody);
}
// get list Pharmacy service
const getPharmacyList=async(req,res)=>{
    // return Pharmacy.find({$or:[{is_active:true}]});
    return Pharmacy.find();
}

// get list by id Pharmacy service
const getPharmacyById=async(pharmacyId)=>{
    return Pharmacy.findById(pharmacyId);
}
//  delete deletePharmacy
const deletePharmacy=async(pharmacyId)=>{
    return  Pharmacy.deleteOne({_id:pharmacyId});
}

// update pharmacy by id
const updatePharmacy = async (pharmacyId , updateBody) => {
    return await Pharmacy.findByIdAndUpdate(pharmacyId,{...updateBody}) ;
}
module.exports={
    createPharmacy,
    getPharmacyList,
    getPharmacyById,
    deletePharmacy,
    updatePharmacy
}

