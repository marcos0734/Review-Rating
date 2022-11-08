var nodemailer = require ('nodemailer')
var transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user : "coderspractice@gmail.com",
        pass : "ezeiojionriicffr"
    }
});


var mailOption={
    from: "coderspractice@gmail.com",
    to: "harsh.bhawsar16@gmail.com",
    subject: "HELLO BOZO",
    text: ""

}

module.exports={
    transporter,
    mailOption
}