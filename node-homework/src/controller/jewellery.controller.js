const {jewelleryService}=require('../services');
// create hotel
const createJewellery=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.Jewellery');
        const jewellery=await jewelleryService.createJewellery(reqBody);
        if(!jewellery){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:jewellery
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get hotel list
const getJewelleryList=async(req,res)=>{
    try {
        const jewelleryList=await jewelleryService.getJewelleryList(req,res);
        res.status(201).json({
            success:true,
            message:'get all hotels list',
            data:{jewelleryList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get hotel details by id
const getJewelleryDetails=async(req,res)=>{
    try {
        const jewelleryDetails=await jewelleryService.getJewelleryById(req.params.jewelleryId);
        if(!jewelleryDetails){
            throw new Error("trip or travel not found");
        }
        res.status(201).json({
            success:"trip or travel details get success",
            data:jewelleryDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// delete hotel by id
const deleteJewellery=async(req,res)=>{
    try {
        const jewelleryId=req.params.jewelleryId;
        const jewelleryExists=await jewelleryService.getJewelleryById(jewelleryId)
        if(!jewelleryExists){
            throw new Error("hotel name not found");
        }
        await jewelleryService.deleteJewellery(jewelleryId);
        res.status(201).json({
            success :true,
            message :"deleted succesfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    deleteJewellery
}