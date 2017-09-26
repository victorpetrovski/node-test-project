var express = require('express');
var router = express.Router();

router.use('/api/v1', require(APP_ROUTE_PATH + 'v1'));

module.exports = router;
