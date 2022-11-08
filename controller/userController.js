const bcrypt = require("bcrypt");
const { application } = require("express");
const User = require("../model/userSchema");
const userSchema = require('../model/userSchema')
const {transporter,mailOption} = require("../service/mailService")

const sendMail = async (req,resp) => {
    try {
    transporter.sendMail(mailOption,(error,info)=> {
       console.log("ncjbchjsbchjsbcjk")
        if(error){
            console.log(error);
        }
        else{
            console.log("Email Sent Succesfully" + info.response);
            return resp.send("Email Sent Succesfully" + info.response);
        }
    })
} catch (error) {
    res.send("Error" + err)
}
}



const userSignup = async (req, res) => {
    try {
        let email = req.body.email;
        console.log("emaillllllllllll", req.body);
        //const cruddata=new crudeSchema(req,res);
        const userData = new userSchema({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            city: req.body.city,
            state: req.body.state,
            isActive: req.body.isActive,
            role: req.body.role
        })
        console.log(req.body);

        //sbse pehle check kr rhe h ki user already register h ki ni..email se.  Agr register h to yhi se return kr jao nhi to add krwa do
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ status: 400, error: "Email already exists.." });
        }

        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(password, salt);

        let result = await new_user.save();

        console.log("inside try");
        const addUser = await userData.save();
        console.log("after try");
        res.json(addUser);
    }
    catch (err) {
        res.send("Error" + err)
    }

    const salt = await bcrypt.getsalt
}

 module.exports = {
     sendMail,
     userSignup
 }