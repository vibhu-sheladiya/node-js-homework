const joi=require('joi');
//** create travel */
const createBus={
    body: joi.object().keys({
        bus_name: joi.string().required().trim(),
        route_name: joi.string().required().trim(),
        available_seats : joi.string().required().trim(),
        status:joi.string().required().trim(),
        pickup:joi.string().required().trim(),
        phoneno:joi.string().required().trim(),
    }),
    };
/**get user list */
    // const getBusList={
    //     query: joi.object().keys({
    //     search: joi.string().trim().allow(""),
    //     sortBy: joi.string().trim().allow(""),
    //     limit: joi.number().integer().allow(""),
    //     page: joi.number().integer().allow(""),
    //     }),
    // };

    module.exports={
        createBus,
        // getUserList,
    }