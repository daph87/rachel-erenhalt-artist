const express = require("express");
const cors = require("cors");
const server = express();
const mailGun = require('nodemailer-mailgun-transport');

server.use(cors());
server.use(express.json());

//send email
const nodemailer = require("nodemailer");

const auth = {
    auth: {
        api_key: 'fef411747bc04415cd9d84d345a69efc-0afbfc6c-bb976362',
        domain: 'sandbox872bf1f171bc45448938885a82481807.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

server.post('/send-email', async (req, res) => {
    console.log(req.body, "request");


    let mailOptions = {
        from: 'zoomgallerytlv@gmail.com',
        to: 'zoomgallerytlv@gmail.com',
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
