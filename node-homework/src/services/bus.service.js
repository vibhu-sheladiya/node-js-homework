const{Bus}=require('../models');

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => Bus.create(reqBody);

module.exports={
    createBus
};