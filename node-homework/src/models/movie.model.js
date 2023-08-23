const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema(
    {
        movie_title:{
            type:String,
            required:[true,'movie title is required'],
            trim: true,
        },
        directorName:{
            type : String,
            trim:true,
        },
      release_date:{
        type:Date ,
        default: Date.now(),
      },
      runningTime:{
        type:Number,
        minlength:10,
        maxlength:256,
      },
      genre:{
        type:String,
      },
      language:{
        type:Array,
      },
      country:{
        type: Array,
      },
      awards:{
        type: Number,
      },
      posterUrl:{
        type:String,
        },
        trailerUrl:{
            type:String,
        },
        rating:{
            type:Number,
            max: 9,
            min: 1
            },
            createdAt:{
                type:Date,
                default: new Date(),
            },
            updatedAt:{
                type:Date,
                default: null,
            }
            },{timestamps:true,autoCreate:false}
);
const Movie=mongoose.model('movie',movieSchema);
module.exports =Movie;