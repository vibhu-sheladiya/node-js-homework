const express=require('express');
const {stationeryController}=require('../../controller');
const {stationaryValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-stationery',
validate(stationaryValidation.createStationary),
stationeryController.createStationery);

router.get('/list',
stationeryController.getStationeryList);

router.get('/listid/:stationeryId',
stationeryController.getStationeryDetails);

router.delete('/delete/:stationeryId',
stationeryController.deleteStationery)

router.put('/update-stationery/:stationeryId',
stationeryController.updateStationery);

module.exports = router;
