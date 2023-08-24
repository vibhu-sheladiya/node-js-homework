const express=require('express');
const userRoute= require('./user.route');
const categoryRoute= require('./category.route');
const hotelRoute= require('./hotel.route');
const travelRoute= require('./travel.route');
const busRoute= require('./bus.route');
const router=express.Router();

router.use('/user',userRoute);
router.use('/category',categoryRoute);
router.use('/bus',busRoute);
router.use('/hotel',hotelRoute);
router.use('/travel',travelRoute);

module.exports=router;