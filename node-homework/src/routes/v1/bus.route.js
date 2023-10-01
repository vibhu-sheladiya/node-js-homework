const express=require('express');
const {busValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const {busController}=require('../../controller');
const router=express.Router();

router.post('/create-bus',
validate(busValidation.createBus),
busController.createBus);

router.get('/list',
busController.getBusList);

router.get('/listid/:busId',
busController.getBusDetails);

router.delete('/delete/:busId',
busController.deleteBus);

router.put('/update-bus/:busId',
busController.updateBus);

module.exports = router;
