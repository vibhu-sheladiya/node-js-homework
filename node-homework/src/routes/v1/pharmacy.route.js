const express=require('express');
const {pharmacyController}=require('../../controller');
const {pharmacyValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-pharmacy',
validate(pharmacyValidation.createPharmacy),
pharmacyController.createPharmacy);

router.get('/list',
pharmacyController.getPharmacyList);

router.get('/listid/:pharmacyId',
pharmacyController.getPharmacyDetails);

router.delete('/delete/:pharmacyId',
pharmacyController.deletePharmacy);

module.exports = router;





