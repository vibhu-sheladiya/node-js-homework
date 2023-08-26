const express=require('express');
const {schoolController}=require('../../controller');
const {schoolValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-school',
validate(schoolValidation.createSchool),
schoolController.createSchool);

router.get('/list',
schoolController.getSchoolList);

router.get('/listid/:schoolId',
schoolController.getSchoolDetails);

router.delete('/delete/:schoolId',
schoolController.deleteSchool)

module.exports = router;
