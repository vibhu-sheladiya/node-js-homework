const joi=require('joi');
//** create stationary */
const createStationary={
    body: joi.object().keys({
        stat_name: joi.string().required().trim(),
    }),
    };


    module.exports={
        createStationary,
       
    }