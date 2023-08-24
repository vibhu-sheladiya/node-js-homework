const express=require('express');
const {travelController}=require('../../controller');
const router=express.Router();

router.post('/create-travel',
travelController.createTravel);

router.get('/list',
travelController.getTravelList);

router.get('/listid/:travelId',
travelController.getTravelDetails);

router.delete('/delete/:travelId',
travelController.deleteTravel);

module.exports=router;