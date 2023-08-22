const express=require('express');
const {busController}=require('../../controller');
const router=express.Router();

router.post('/create-bus',
busController.createBus);

router.get('/list',
busController.getBusList);

router.get('/listid/:busId',
busController.getBusDetails);

router.delete('/delete/:busId',
busController.deleteBus)

module.exports = router;
