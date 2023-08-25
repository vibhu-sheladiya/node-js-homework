const {schoolService}=require('../services');
// create school
const createSchool=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.School');
        const school=await schoolService.createSchool(reqBody);
        if(!school){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:school
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get school list
const getSchoolList=async(req,res)=>{
    try {
        const schoolList=await schoolService.getSchoolList(req,res);
        res.status(201).json({
            success:true,
            message:'get all schoolList ',
            data:{schoolList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get school details by id
const getSchoolDetails=async(req,res)=>{
    try {
        const schoolDetails=await schoolService.getSchoolById(req.params.schoolId);
        if(!schoolDetails){
            throw new Error("trip or travel not found");
        }
        res.status(201).json({
            success:"trip or travel details get success",
            data:schoolDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// delete school by id
const deleteSchool=async(req,res)=>{
    try {
        const schoolId=req.params.schoolId;
        const schoolExists=await schoolService.getSchoolById(schoolId)
        if(!schoolExists){
            throw new Error("hotel name not found");
        }
        await schoolService.deleteSchool(schoolId);
        res.status(201).json({
            success :true,
            message :"deleted succesfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={
    createSchool,
    getSchoolList,
    getSchoolDetails,
    deleteSchool
}