const joi=require('joi');
//** create music */
const createMusic={
    body: joi.object().keys({
        title: joi.string().required().trim(),
        artist_name: joi.string().required().trim(),
        genre_name: joi.string().required().trim(),
        language: joi.string().required().trim(),
        album_name: joi.string().required().trim(),
    
    }),
    };


    module.exports={
        createMusic
        
    }