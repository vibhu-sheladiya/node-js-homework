const joi=require('joi');
//** create grocery */
const createGrocery={
    body: joi.object().keys({
        gro_name: joi.string().required().trim(),
        brand: joi.string().required().trim(),
    }),
    };
    module.exports={
        createGrocery
        
    }