const {movieService}=require('../services');
// create movie 
const createMovie=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++reqbody.movie');
        const movie=await movieService.createMovie(reqBody);
        if(!movie){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:movie
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

//get list movie
const getMovieList=async(req,res)=>{
    try {
        const movieList=await movieService.getMovieList(req,res);
        res.status(201).json({
            success:true,
            message:'get all movie list',
            data:{...movieList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
} ;

// get list movie by id
const getMovieDetails=async(req,res)=>{
    try {
        const movieDetails=await movieService.getMovieById(req.params.movieId);
        if(!movieDetails){
            throw new Error('no such movie found')
        }
        res.status(201).json({
            success :"movie details list success",
            data : {...movieDetails},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// delete movie by id
const deleteMovie = async (req ,res )=>{
    try {
        const movieId=req.params.movieId;
        const movieExists=await movieService.getMovieById(movieId);
        if(!movieExists){
            throw  new Error ('No Such Movie Found');
        }
        await  movieService.deleteMovie(movieId);
        res.status(201).json({
            success:true,
            message:`${movieId} deleted Successfully`,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={
    createMovie,
    getMovieList,
    getMovieDetails,
    deleteMovie,
}