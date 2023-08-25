const { musicController } = require('.');
const {musicService}=require('../services');
// create movie 
const createMusic=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++reqbody.music');
        const music=await musicService.createMusic(reqBody);
        if(!music){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:{music},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

//get list movie
const getMusicList=async(req,res)=>{
    try {
        const musicList=await musicService.getMusicList(req,res);
        res.status(201).json({
            success:true,
            message:'get all music list',
            data:{...musicList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
} ;

// get list movie by id
const getMusicDetails=async(req,res)=>{
    try {
        const musicDetails=await musicService.getMusicById(req.params.musicId);
        if(!musicDetails){
            throw new Error('no such movie found')
        }
        res.status(201).json({
            success :"music details list success",
            data : {...musicDetails},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// delete movie by id
const deleteMusic = async (req ,res )=>{
    try {
        const musicId=req.params.musicId;
        const musicExists=await musicService.getMusicById(musicId);
        if(!musicExists){
            throw  new Error ('No Such music Found');
        }
        await  musicService.deleteMusic(musicId);
        res.status(201).json({
            success:true,
            message:`${musicId} deleted Successfully`,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={
    createMusic,
    getMusicList,
    getMusicDetails,
    deleteMusic,
}