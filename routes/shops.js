const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

/* GET users listing. */
router.post('/', shopController.create);
router.get('/getAllData', shopController.getAllData);
router.get('/getById', shopController.getById);
//router.patch('/patchById', shopController.updateById);
//router.put('/putById', shopController.putById);
//router.delete('/deleteById', shopController.deleteById);

module.exports = router;
