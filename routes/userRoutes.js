const express =  require('express');
const router = express.Router();
const user = require ('../controller/userController');
const validation = require ('../validation/user/user_validation');
// const {mailoption}= require ('../controller/userController');

// router.post('/registerUser', user.userSignup);

router.post ("/register", validation.registerUserValidation,user.userSignup);

router.get("/send",user.sendMail);


module.exports = router;