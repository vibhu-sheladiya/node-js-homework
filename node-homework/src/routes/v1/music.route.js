const express=require('express');
const {musicController}=require('../../controller');
const {musicValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-music',
validate(musicValidation.createMusic),
musicController.createMusic);

router.get('/list',
musicController.getMusicList);

router.get('/listid/:musicId',
musicController.getMusicDetails);

router.delete('/delete/:musicId',
musicController.deleteMusic);

router.put('/update-music/:musicId',
  musicController.updateMusic);

module.exports = router;
