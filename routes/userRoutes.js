const express =  require('express');
const router = express.Router();
const user = require ('../controller/userController');
const validation = require ('../validation/user/user_validation');

router.post('/registerUser', user.userSignup);

router.post ("/register", validation.registerUserValidation,user.userSignup);


module.exports = router;