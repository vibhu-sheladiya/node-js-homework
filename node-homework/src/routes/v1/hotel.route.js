const express=require('express');
const {hotelController}=require('../../controller');
const {hotelValidation}= require('../../validations');
const validate=require('../../middlewares/validate');

const router=express.Router();

router.post('/create-hotel',
validate(hotelValidation.createHotel),
hotelController.createHotel);

router.get('/list',
hotelController.getHotelList);

router.get('/listid/:hotelId',
hotelController.getHotelList);

router.delete('/delete/:hotelId',
hotelController.deleteHotel);

router.put('/update-hotel/:hotelId',
hotelController.updateHotel);

module.exports=router;