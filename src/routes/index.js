const express = require('express');
const controller = require('../controllers/pairs.controllers');

const router = express.Router();

router.route("/par")
    .get(controller.getPairs);


module.exports = router;