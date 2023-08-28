const joi=require('joi');
//** create hotel */
const createHotel={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        phone: joi.string().required().trim(),
        email: joi.string().required().trim(),
        address: joi.string().required().trim(),
        city_name: joi.string().required().trim(),
        price: joi.string().required().trim(),
        feature: joi.string().required().trim(),
        check_in: joi.string().required().trim(),
        check_out: joi.string().required().trim(),
        booking_time: joi.string().required().trim(),
        status: joi.string().required().trim(),
    }),
    };


    module.exports={
        createHotel
       
    }