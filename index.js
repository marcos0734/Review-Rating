const express=require('express');
const app=express();
require('./model/config')
var bodyParser=require('body-parser');
const userSchema = require('./model/userSchema');
const User=require('./model/userSchema');
const bcrypt =require("bcrypt")
const router = require('./routes/userRoutes')
const cron =  require('node-cron')

// cron.schedule("*./3 * * * * *",function(){
//     console.log("running in every 10 second")
// })


// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.json())


app.use('/',router)



app.get('/',function(req,res){
     res.send("Welcome to node js world... !");
 })


//  app.post('/registerUser',async(req,res) => {
//      try{
//         console.log("emaillllllllllll",req.body)
//     let email=req.body.email;
   
//     //const cruddata=new crudeSchema(req,res);
//     const userData=new userSchema({
//         name:req.body.name,
//         email: req.body.email,
//         number:req.body.number,
//         city:req.body.city,
//         state:req.body.state,
//         isActive:req.body.isActive,
//         role:req.body.role
//     })
//     console.log(req.body.name);


//         //sbse pehle check kr rhe h ki user already register h ki ni..email se.  Agr register h to yhi se return kr jao nhi to add krwa do
//         const userExists= await User.findOne({email:email});
//         if(userExists){
//             return res.status(400).json({status:400,error:"Email already exists.."});
//         }

//         const salt = await bcrypt.gensalt(10);
//         new_user.password = await bcrypt.hash(password,salt);

//         let result = await new_user.save();

//         console.log("inside try");
//         const addUser= await userData.save();
//         console.log("after try");
//         res.json(addUser);
//     }catch(err){
//         res.send("Error"+err)
//     }

//     const salt = await bcrypt.getsalt

// })


app.listen(8000,function(req,res){
    console.log("server is running on port : 8000");
});