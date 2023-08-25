const {Movie}=require('../models');
// create movie
const createMovie=async(reqBody)=>{
    return Movie.create(reqBody);
}
// get list movie service
const getMovieList=async(req,res)=>{
    return Movie.find();
}

// get list by id movie service
const getMovieById=async(movieId)=>{
    return Movie.findById(movieId);
}
//  delete movie
const deleteMovie=async(movieId)=>{
    return  Movie.deleteOne({_id:movieId});
}
module.exports={
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie
}

