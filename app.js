const express = require("express");
const cors = require("cors");
const server = express();
const mailGun = require('nodemailer-mailgun-transport');
const secret_obj = require('./authentification');

server.use(cors());
server.use(express.json());

//send email
const nodemailer = require("nodemailer");

const auth = {
    auth: {
        api_key: secret_obj.secret_obj.api_key,
        domain: secret_obj.secret_obj.domain
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

server.post('/send-email', async (req, res) => {
    console.log(req.body, "request");


    let mailOptions = {
        from: secret_obj.secret_obj.mail,
        to: secret_obj.secret_obj.mail,
        subject: req.body.subject,
        text: req.body.message + '\n' + 
        'Sent from ' + req.body.name + ': ' + req.body.email + '\n' +
        ' Phone: ' + req.body.phone,
    };

        transporter.sendMail(mailOptions, await function (error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent');
            }
        });
})


server.listen(8000, () => console.log("Listening on http://localhost:8000"));