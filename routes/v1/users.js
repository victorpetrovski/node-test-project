var express = require('express');
var router =  express.Router();

const AuthController = require(APP_CONTROLLER_PATH+'auth');
const UserController = require(APP_CONTROLLER_PATH+'user');
let authController = new AuthController();
let userController = new UserController();


/**
 * @api {get} /register Register the user
 * @apiGroup User
 * @apiSuccess {Object[]} users Users list
 * @apiSuccess {Number} users.id User id
 */
router.post('/register',authController.registerUser);



/**
 * @api {get} /login Login the user
 * @apiGroup User
 * @apiSuccess {Object[]} users Users list
 * @apiSuccess {Number} users.id User id
 */
router.post('/login',authController.loginUser);

/**
 * @api {get} /users List all activeUsers
 * @apiGroup User
 * @apiSuccess {Object[]} users Users list
 * @apiSuccess {Number} users.id User id
 */
router.get('/',userController.getUsers);

module.exports = router;