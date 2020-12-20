const express = require('express');

const router = express.Router();

router.use('/stores', require('./stores'));

module.exports = router;