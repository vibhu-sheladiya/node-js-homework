const {musicService}=require('../services');
// create movie 
const createMusic=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++reqbody.music');
        const movie=await musicService.createMusic(reqBody);
        if(!movie){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:{movie},
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
        const movieDetails=await musicService.getMusicById(req.params.movieId);
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
    createMusic,
    getMusicList,
    getMusicDetails,
    deleteMovie,
}