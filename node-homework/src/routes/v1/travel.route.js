const express=require('express');
const {travelController}=require('../../controller');
const {travelValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-travel',
validate(travelValidation.createTravel),
travelController.createTravel);

router.get('/list',
travelController.getTravelList);

router.get('/listid/:travelId',
travelController.getTravelDetails);

router.delete('/delete/:travelId',
travelController.deleteTravel);

router.put('/update-travel/:travelId',
travelController.updateTravel);

module.exports=router;