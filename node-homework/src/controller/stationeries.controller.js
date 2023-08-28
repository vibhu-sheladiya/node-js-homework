const {stationeryService}=require('../services');
// create Stationery
const createStationery=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.Stationery');
        const stationery=await stationeryService.createStationery(reqBody);
        if(!stationery){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:stationery
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get Stationery list
const getStationeryList=async(req,res)=>{
    try {
        const stationeryList=await stationeryService.getStationeryList(req,res);
        res.status(201).json({
            success:true,
            message:'get all stationeryList',
            data:{stationeryList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get Stationery details by id
const getStationeryDetails=async(req,res)=>{
    try {
        const stationeryDetails=await stationeryService.getStationeryById(req.params.stationeryId);
        if(!stationeryDetails){
            throw new Error("stationery not found");
        }
        res.status(201).json({
            success:"stationery details get success",
            data:stationeryDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// delete Stationery by id
const deleteStationery=async(req,res)=>{
    try {
        const stationeryId=req.params.stationeryId;
        const stationeryExists=await stationeryService.getStationeryById(stationeryId)
        if(!stationeryExists){
            throw new Error("stationery name not found");
        }
        await stationeryService.deleteStationery(stationeryId);
        res.status(201).json({
            success :true,
            message :"deleted succesfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// update Stationery
const updateStationery=async(req,res)=>{
    try {
        const stationeryId=req.params.stationeryId;
        const statEx=await stationeryService.getStationeryById(stationeryId);
        if(!statEx){
            throw new Error('stationery doesnot exist');
        }
        await stationeryService.updateStationery(stationeryId,req.body)
        res.status(201).json({
            success:true,
            message:"successfully updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports={
    createStationery,
    getStationeryList,
    getStationeryDetails,
    deleteStationery,
    updateStationery
}