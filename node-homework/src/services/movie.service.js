const {Movie}=require('../models');
// create movie
const createMovie=async(reqBody)=>{
    return Movie.create(reqBody);
}
// get list movie service
const getMovieList=async(req,res)=>{
    return Movie.find({$or:[{is_active:true}]});
}

// get list by id movie service
const getMovieById=async(movieId)=>{
    return Movie.findById(movieId);
}
//  delete movie
const deleteMovie=async(movieId)=>{
    return  Movie.deleteOne({_id:movieId});
}

// update
const updateMovie=async(movieId,updateBody)=>{
    // return await Movie.findByIdAndUpdate(movieId,{...updateBody});
    return await Movie.findByIdAndUpdate(movieId,{ $set: updateBody });
}
module.exports={
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie,
    updateMovie
}

