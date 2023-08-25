const express=require('express');
const {groceryController}=require('../../controller');
const router=express.Router();

router.post('/create-grocery',
groceryController.createGrocery);

router.get('/list',
groceryController.getGroceryList);

router.get('/listid/:groceryId',
groceryController.getGroceryDetails);

router.delete('/delete/:groceryId',
groceryController.deleteGrocery);

module.exports = router;
