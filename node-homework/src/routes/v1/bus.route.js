const express=require('express');
const {busController}=require('../../controller');
const router=express.Router();

router.post('/create-bus',
busController.createBus);

module.exports = router;
