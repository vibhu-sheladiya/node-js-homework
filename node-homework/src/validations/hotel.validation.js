const joi=require('joi');
//** create hotel */
const createHotel={
    body: joi.object().keys({
        name: joi.string().required().trim(),
    }),
    };


    module.exports={
        createHotel
       
    }