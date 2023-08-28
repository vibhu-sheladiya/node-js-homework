const joi=require('joi');
//** create jewellery */
const createJewellery={
    body: joi.object().keys({
        j_name: joi.string().required().trim(),
        price: joi.string().required().trim(),
        description: joi.string().required().trim(),
        address: joi.string().required().trim(),
        category_name: joi.string().required().trim(),
        available_stock: joi.string().required().trim(),
        item_name: joi.string().required().trim(),
    }),
    };
    

    module.exports={
        createJewellery
        
    }