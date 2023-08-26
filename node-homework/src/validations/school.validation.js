const joi=require('joi');
//** create school */
const createSchool={
    body: joi.object().keys({
        sch_name: joi.string().required().trim(),
       
    }),
    };


    module.exports={
        createSchool
        
    }