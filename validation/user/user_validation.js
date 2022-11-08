const user =  require("./user_schema")

module.exports = {
    registerUserValidation: async (req, res, next) => {
        const value = await user.userregisterUser.validate(req.body,{ abortEarly:false}) 

        if (value.error){
            res.json({
                success : 0,
                message
            })
        }
        else {
            next()
        }

    }
} 