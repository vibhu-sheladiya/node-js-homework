const joi=require('joi');
//** create grocery */
const createGrocery={
    body: joi.object().keys({
        gro_name: joi.string().required().trim(),
        total_price: joi.string().required().trim(),
        brand: joi.string().required().trim(),
        price_per_unit: joi.string().required().trim(),
        available_stock: joi.string().required().trim(),
    }),
    };
    module.exports={
        createGrocery
        
    }