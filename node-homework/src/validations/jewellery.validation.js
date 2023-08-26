const joi=require('joi');
//** create jewellery */
const createJewellery={
    body: joi.object().keys({
        j_name: joi.string().required().trim(),
    }),
    };
    

    module.exports={
        createJewellery
        
    }