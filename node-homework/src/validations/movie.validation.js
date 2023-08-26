const joi=require('joi');
//** create movie */
const createMovie={
    body: joi.object().keys({
        movie_title: joi.string().required().trim(),
    }),
    };

    module.exports={
        createMovie
        
    }