const joi = require('joi');

const schema = {
    registerUser: joi.object({
        name: joi.string().max(20).required(),
        email : joi.string().email().required(),
        password : joi.string().min(6).required(),
        phone_no: joi.number().integer().min(10000000).max(999999999).message("invalid mobile").required(),
        city : joi.string().required(),
        state : joi.string().required(),
     } ) .unknown(true),
    }