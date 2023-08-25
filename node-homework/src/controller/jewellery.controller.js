const {jewelleryService}=require('../services');
// create hotel
const createTravel=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.travel');
        const jewellery=await jewelleryService.createTravel(reqBody);
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
const getTravelList=async(req,res)=>{
    try {
        const jewelleryList=await travelService.getTravelList(req,res);
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
const getTravelDetails=async(req,res)=>{
    try {
        const jewelleryDetails=await travelService.getTravelById(req.params.travelId);
        if(!travelDetails){
            throw new Error("trip or travel not found");
        }
        res.status(201).json({
            success:"trip or travel details get success",
            data:travelDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// delete hotel by id
const deleteTravel=async(req,res)=>{
    try {
        const travelId=req.params.travelId;
        const travelExists=await travelService.getTravelById(travelId)
        if(!travelExists){
            throw new Error("hotel name not found");
        }
        await travelService.deleteTravel(travelId);
        res.status(201).json({
            success :true,
            message :"deleted succesfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={
    createTravel,
    getTravelList,
    getTravelDetails,
    deleteTravel
}