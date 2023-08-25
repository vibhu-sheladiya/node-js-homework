const express=require('express');
const {movieController}=require('../../controller');
const router=express.Router();

router.post('/create-movie',
movieController.createMovie);

router.get('/list',
movieController.getMovieList);

router.get('/listid/:movieId',
movieController.getMovieDetails);

router.delete('/delete/:movieId',
movieController.deleteMovie);

module.exports = router;
