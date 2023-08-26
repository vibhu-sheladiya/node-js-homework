const {Pharmacy}=require('../models');
// create deletePharmacy
const createPharmacy=async(reqBody)=>{
    return Pharmacy.create(reqBody);
}
// get list deletePharmacy service
const getPharmacyList=async(req,res)=>{
    // return Pharmacy.find({$or:[{is_active:true}]});
    return Pharmacy.find();
}

// get list by id deletePharmacy service
const getPharmacyById=async(pharmacyId)=>{
    return Pharmacy.findById(pharmacyId);
}
//  delete deletePharmacy
const deletePharmacy=async(pharmacyId)=>{
    return  Pharmacy.deleteOne({_id:pharmacyId});
}
module.exports={
    createPharmacy,
    getPharmacyList,
    getPharmacyById,
    deletePharmacy
}

