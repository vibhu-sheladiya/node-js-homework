const express=require('express');
const {movieController}=require('../../controller');
const {movieValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-movie',
validate(movieValidation.createMovie),
movieController.createMovie);

router.get('/list',
movieController.getMovieList);

router.get('/listid/:movieId',
movieController.getMovieDetails);

router.delete('/delete/:movieId',
movieController.deleteMovie);

module.exports = router;
