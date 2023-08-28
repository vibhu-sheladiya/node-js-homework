const joi=require('joi');
//** create bus */
const createBus={
    body: joi.object().keys({
        bus_name: joi.string().required().trim(),
        route_name: joi.string().required().trim(),
        available_seats: joi.string().required().trim(),
        status: joi.string().required().trim(),
        pickup: joi.string().required().trim(),
        price: joi.string().required().trim(),
        date: joi.string().required().trim(),
        bus_number: joi.string().required().trim(),
        driver_name: joi.string().required().trim(),
    }),
    };

    module.exports={
        createBus

    }