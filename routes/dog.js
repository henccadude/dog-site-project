const express = require('express');

const router = express.Router();

const dogsController = require('../controller/dog-controller');

router.get('/dogs', dogsController.getDogs);
router.get('/dogs-review', dogsController.getDogsReview);
router.get('/', dogsController.getIndex);

module.exports = router;