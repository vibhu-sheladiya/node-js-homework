const express=require('express');
const {musicController}=require('../../controller');
const router=express.Router();

router.post('/create-music',
musicController.createMusic);

router.get('/list',
musicController.getMusicList);

router.get('/listid/:musicId',
musicController.getMusicDetails);

router.delete('/delete/:musicId',
musicController.deleteMusic);

module.exports = router;
