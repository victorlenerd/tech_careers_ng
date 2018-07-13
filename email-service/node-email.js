const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

port = process.env.PORT | 5656;

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/apply', (req, res) => {
    //ethereal generated email
    // Username	lz36xuhk2naxyszt@ethereal.email
    // Password	cvupy6MX5hsBFHF3xW

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.techbuzz.com.ng',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'techcareers@techbuzz.com.ng', // generated ethereal user
            pass: 'w3bh4ck' // generated ethereal password
        },
    tls: {
        rejectUnauthorized: false
    }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send(req.body);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });


});

app.listen(port, () => {
    console.log( `Server is running on ${port}`);
});






