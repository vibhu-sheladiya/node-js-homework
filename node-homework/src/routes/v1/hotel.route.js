const express=require('express');
const {hotelController}=require('../../controller');
const router=express.Router();

router.post('/create-hotel',
hotelController.createHotel);

router.get('/list',
hotelController.getHotelList);

router.get('/listid/:hotelId',
hotelController.getHotelList);

router.delete('/delete/:hotelId',
hotelController.deleteHotel);

module.exports=router;