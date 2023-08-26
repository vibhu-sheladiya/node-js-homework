const joi=require('joi');
//** create pharmacy */
const createPharmacy={
    body: joi.object().keys({
        phrm_name: joi.string().required().trim(),
       
    }),
    };

    module.exports={
        createPharmacy
       
    }