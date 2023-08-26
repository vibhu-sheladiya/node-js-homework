const joi=require('joi');
//** create music */
const createMusic={
    body: joi.object().keys({
        title: joi.string().required().trim(),
    
    }),
    };


    module.exports={
        createMusic
        
    }