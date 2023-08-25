const express=require('express');
const {schoolController}=require('../../controller');
const router=express.Router();

router.post('/create-school',
schoolController.createSchool);

router.get('/list',
schoolController.getSchoolList);

router.get('/listid/:schoolId',
schoolController.getSchoolDetails);

router.delete('/delete/:schoolId',
schoolController.deleteSchool)

module.exports = router;
