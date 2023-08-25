const {Music}=require('../models');
// create music
const createMusic=async(reqBody)=>{
    return Music.create(reqBody);
}
// get list music 
const getMusicList=async(req,res)=>{
    return Music.find();
}
// get list id music
const getMusicById=async(musiId)=>{
    return Music.findById(musiId);
}

// delete music
const deleteMusic=async(musiId)=>{
    return Music.findByIdAndDelete(musiId)
}