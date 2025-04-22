const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin-controller');

router.get('/add-dog', adminController.getAddDogs);
router.post('/add-dog', adminController.postAddDog);
router.get('/edit-dog', adminController.getEditDogs)
router.get('/edit-dog/:dogId', adminController.getEditDogs);

module.exports = router;