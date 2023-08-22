const {busService}=require('../services');
/**create bus */
const createBus = async (req, res) => {
    try{
        const reqBody=req.body;
        console.log(reqBody,'+++++++++ reqBody.createbus');
        const bus= await busService.createBus(reqBody);
        if(!bus){
            throw new Error("Something went wrong, please try again or later!")
        }
        res.status(200).json({
            success: true,
            message: reqBody,
            data: { reqBody },
          });
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
};
module.exports={
    createBus
}