/**
 * Created by victor on 5/8/17.
 */
const express = require('express'),
    router = express.Router();
const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";

router.use('/users', require(ROUTE_V1_PATH + 'users'));
router.use('/notes', require(ROUTE_V1_PATH + 'notes'));

module.exports = router;