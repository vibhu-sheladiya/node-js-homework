const joi=require('joi');
//** create movie */
const createMovie={
    body: joi.object().keys({
        movie_title: joi.string().required().trim(),
        director_name: joi.string().required().trim(),
        genre: joi.string().required().trim(),
        language: joi.string().required().trim(),
        country: joi.string().required().trim(),
        movie_title: joi.string().required().trim(),
        movie_title: joi.string().required().trim(),
    }),
    };

    module.exports={
        createMovie  
    }