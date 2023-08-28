const {Music}=require('../models');
// create music
const createMusic=async(reqBody)=>{
    return Music.create(reqBody);
}
// get list music 
const getMusicList=async(req,res)=>{
    return Music.find({$or:[{is_active:false}]});
    // return Music.find();
}
// // get list id music
const getMusicById=async(musicId)=>{
    return Music.findById(musicId);
 }

// delete music
const deleteMusic=async(musicId)=>{
    return Music.findByIdAndDelete(musicId);
}

// update music by id
const updateMusic = async (musicId , updateBody) => {
    // return Music.findByIdAndUpdate(musicId, { $set: updateBody });
    return await Music.findByIdAndUpdate(musicId,{...updateBody}) ;
    // return await Music.findByIdAndUpdate(musicId,{$set: updateBody}) ;
}
module.exports={
    createMusic,
    getMusicList,
    getMusicById,
    deleteMusic,
    updateMusic
}