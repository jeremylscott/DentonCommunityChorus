require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const {json} = require('body-parser')
app.use(json())

app.post('/api/sendmail', (req,res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },

        tls: {
            rejectUnauthorized: false
        }
    })
    
    let mailOptions = {
        from: `${req.body.email}`,
        to: `${process.env.EMAIL}`,
        subject: `${req.body.subject}`,
        text: `${req.body.message}`
    }
    console.log(req.body.email);
    transporter.sendMail(mailOptions, function (err,res) {
        if(err) {
            console.log('an error occurred: ', err);
        }
        else {
            null
        }
    })

})



app.listen(`${process.env.PORT}`, console.log(`Server listening on port: ${process.env.PORT}`))