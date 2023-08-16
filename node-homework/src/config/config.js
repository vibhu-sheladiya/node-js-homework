const joi= require('joi');  
const dotenv=require('dotenv');

dotenv.config();

const envVarsSchema= joi.object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("mongodb url")

}).unknown();


const {value: envVars,error}=envVarsSchema
.prefs({errors:{label:"key"}})
.validate(process.env);
 
// console.log('====================================');
// console.log(envVars);
// console.log('====================================');
if(error){
    console.log("Config Error",error);
}
module.exports={
    port: envVars.PORT,
    mongodb:{
        url: envVars.MONGODB_URL,
        option:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
};




