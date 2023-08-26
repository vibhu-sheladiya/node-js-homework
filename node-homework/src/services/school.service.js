const {School}=require('../models');
/**
 * Create School
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
// create School
const createSchool=async(reqBody)=>{
    return School.create(reqBody);
};

// get list School service
const getSchoolList=async(req,res)=>{
    // return School.find();
    return School.find({$or:[{is_active:false}]});
}
// get list School by id
const getSchoolById=async(schoolId)=>{
    return School.findById(schoolId);
}
// delete School
const deleteSchool=async(schoolId)=>{
    return School.findByIdAndDelete(schoolId)
}
module.exports={
    createSchool,
    getSchoolList,
    getSchoolById,
    deleteSchool
};