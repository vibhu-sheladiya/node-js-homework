const express=require('express');
const {stationeryController}=require('../../controller');
const router=express.Router();

router.post('/create-stationery',
stationeryController.createStationery);

router.get('/list',
stationeryController.getStationeryList);

router.get('/listid/:stationeryId',
stationeryController.getStationeryDetails);

router.delete('/delete/:stationeryId',
stationeryController.deleteStationery)

module.exports = router;
