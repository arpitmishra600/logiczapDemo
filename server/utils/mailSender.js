const nodemailer = require('nodemailer')
require('dotenv').config()

const mailSender=async (email,title, otp)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure : false,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            },
          })
          await transporter.sendMail({
            from:"Demo" , // sender address
            to: `${email}`, // list of receivers
            subject:`${title}` , // Subject line
            text: `Your otp is ${otp}. And it is valid for 5min.`, // plain text body
          });
    }
    catch(err)
    {
        console.log(err.message)
    }
}
module.exports=mailSender