const joi=require('joi');
//** create bus */
const createBus={
    body: joi.object().keys({
        bus_name: joi.string().required().trim(),
        route_name: joi.string().required().trim(),
    }),
    };

    module.exports={
        createBus

    }