const joi=require('joi');
//** create travel */
const createTravel={
    body: joi.object().keys({
        trip_name: joi.string().required().trim(),
        start_date: joi.string().required().trim(),
        end_date : joi.string().required().trim(),
        description:joi.string().required().trim(),
        email:joi.string().required().trim(),
        phoneno:joi.string().required().trim(),
    }),
    };
/**get user list */
    // const getTravelList={
    //     query: joi.object().keys({
    //     search: joi.string().trim().allow(""),
    //     sortBy: joi.string().trim().allow(""),
    //     limit: joi.number().integer().allow(""),
    //     page: joi.number().integer().allow(""),
    //     }),
    // };

    module.exports={
        createTravel,
        // getUserList,
    }