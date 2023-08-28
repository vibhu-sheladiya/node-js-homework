const {hotelService}=require('../services');
// create hotel
const createHotel=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.hotel');
        const hotel=await hotelService.createHotel(reqBody);
        if(!hotel){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:hotel
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get hotel list
const getHotelList=async(req,res)=>{
    try {
        const hotelList=await hotelService.getHotelList(req,res);
        res.status(201).json({
            success:true,
            message:'get all hotels list',
            data:{hotelList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get hotel details by id
const getHotelDetails=async(req,res)=>{
    try {
        const hotelDetails=await hotelService.getHotelById(req.params.hotelId);
        if(!hotelDetails){
            throw new Error("hotel not found");
        }
        res.status(201).json({
            success:"hotel details get success",
            data:hotelDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// delete hotel by id
const deleteHotel=async(req,res)=>{
    try {
        const hotelId=req.params.hotelId;
        const hotelExists=await hotelService.getHotelById(hotelId)
        if(!hotelExists){
            throw new Error("hotel name not found");
        }
        await hotelService.deleteHotel(hotelId);
        res.status(201).json({
            success :true,
            message :"deleted successfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// update hotel
const updateHotel=async(req,res)=>{
    try {
        const hotelId=req.params.hotelId;
        const hotelEx=await hotelService.getHotelById(hotelId);
        if(!hotelEx){
            throw  new Error('hotel doesnot exist');
        }
        await hotelService.updateHotel(hotelId,req.body);
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
}
module.exports={
    createHotel,
    getHotelList,
    getHotelDetails,
    deleteHotel,
    updateHotel
}