const express=require('express');
const {groceryController}=require('../../controller');
const {groceryValidation}= require('../../validations');
const validate=require('../../middlewares/validate');
const router=express.Router();

router.post('/create-grocery',
validate(groceryValidation.createGrocery),
groceryController.createGrocery);

router.get('/list',
groceryController.getGroceryList);

router.get('/listid/:groceryId',
groceryController.getGroceryDetails);

router.delete('/delete/:groceryId',
groceryController.deleteGrocery);

router.put('/update-grocery/:groceryId',
  groceryController.updateGrocery);

module.exports = router;
