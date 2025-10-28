const express = require('express');
const router = express.Router();
const {InfoController, AirplaneController} = require('../../controller')

router.get('/info',InfoController.info);
router.post('/airplane', AirplaneController.createAirplane);

module.exports = router;