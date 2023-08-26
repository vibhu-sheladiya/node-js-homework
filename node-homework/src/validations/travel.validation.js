const joi=require('joi');
//** create travel */
const createTravel={
    body: joi.object().keys({
        trip_name: joi.string().required().trim(),

    }),
    };


    module.exports={
        createTravel
      
    }