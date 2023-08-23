const express=require('express');
const {hotelController}=require('../../controller');
const router=express.Router();

router.post('/create-hotel',
hotelController.createHotel);

module.exports=router;