const express=require('express');
const userRoute= require('./user.route');
const categoryRoute= require('./category.route');
const hotelRoute= require('./hotel.route');
const travelRoute= require('./travel.route');
const groceryRoute= require('./grocery.route');
const busRoute= require('./bus.route');
const movieRoute= require('./movie.route');
const musicRoute= require('./music.route');
const jewelleryRoute= require('./jewellery.route');
const schoolRoute= require('./school.route');
const stationeryRoute= require('./stationeries.route');
const pharmacyRoute= require('./pharmacy.route');
const router=express.Router();

router.use('/user',userRoute);
router.use('/category',categoryRoute);
router.use('/bus',busRoute);
router.use('/hotel',hotelRoute);
router.use('/travel',travelRoute);
router.use('/grocery',groceryRoute);
router.use('/movie',movieRoute);
router.use('/music',musicRoute);
router.use('/jewellery',jewelleryRoute);
router.use('/school',schoolRoute);
router.use('/stationery',stationeryRoute);
router.use('/pharmacy',pharmacyRoute);

module.exports=router;