const {pharmacyService}=require('../services');
// create pharmacy 
const createPharmacy=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++reqbody.pharmacy');
        const pharmacy=await pharmacyService.createPharmacy(reqBody);
        if(!pharmacy){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:pharmacy
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

//get list pharmacy
const getPharmacyList=async(req,res)=>{
    try {
        const pharmacyList=await pharmacyService.getPharmacyList(req,res);
        res.status(201).json({
            success:true,
            message:'get all pharmacy list',
            data:{...pharmacyList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
} ;

// get list pharmacy by id
const getPharmacyDetails=async(req,res)=>{
    try {
        const pharmacyDetails=await pharmacyService.getPharmacyById(req.params.pharmacyId);
        if(!pharmacyDetails){
            throw new Error('no such Pharmacy found')
        }
        res.status(201).json({
            success :"pharmacy details list success",
            data : {...pharmacyDetails},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// delete pharmacy by id
const deletePharmacy = async (req ,res )=>{
    try {
        const pharmacyId=req.params.pharmacyId;
        const pharmacyExists=await pharmacyService.getPharmacyById(pharmacyId);
        if(!pharmacyExists){
            throw  new Error ('No Such pharmacy Found');
        }
        await  pharmacyService.deletePharmacy(pharmacyId);
        res.status(201).json({
            success:true,
            message:`${pharmacyId} deleted Successfully`,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// update pharmacy
const updatePharmacy=  async(req,res)=>{
    try {
        const pharmacyId=req.params.pharmacyId;
        const pharmacyEx=await pharmacyService.getPharmacyById(pharmacyId);
        if(!pharmacyEx){
            throw new Error("pharmacy not found");
        }
        await pharmacyService.updatePharmacy(pharmacyId,req.body);
        res.status(201).json({
            success:true,
            message:"successfully updated"
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        });
    }
};
module.exports={
    createPharmacy,
    getPharmacyList,
    getPharmacyDetails,
    deletePharmacy,
    updatePharmacy
}