const express=require('express');
const {pharmacyController}=require('../../controller');
const router=express.Router();

router.post('/create-pharmacy',
pharmacyController.createPharmacy);

router.get('/list',
pharmacyController.getPharmacyList);

router.get('/listid/:pharmacyId',
pharmacyController.getPharmacyDetails);

router.delete('/delete/:pharmacyId',
pharmacyController.deletePharmacy);

module.exports = router;
