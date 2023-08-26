const express=require('express');
const {jewelleryController}=require('../../controller');
const {jewelleryValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-jewellery',
validate(jewelleryValidation.createJewellery),
jewelleryController.createJewellery);

router.get('/list',
jewelleryController.getJewelleryList);

router.get('/listid/:jewelleryId',
jewelleryController.getJewelleryDetails);

router.delete('/delete/:jewelleryId',
jewelleryController.deleteJewellery);

module.exports=router;