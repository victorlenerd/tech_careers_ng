const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// const path = require('path'); //module for generating file path in node
let port = process.env.PORT | 5555;

const app = express();


// Body Parser Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/apply', (req, res) => {
  const output = `
    <p>Job Application at Techcareers NG</p>
    <h3>Applicant's details</h3>
    <ul>   
      <li>Name: ${req.body.firstName} " "${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.coverLetter}</li>
    </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.techbuzz.com.ng',
    port: 465,
    secure: true, 
    auth: {
        user: 'techcareers@techbuzz.com.ng', 
        pass: 'w3bh4ck'  
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Tech Careers NG" <techcareers@techbuzz.com.ng>', // sender address
      to: 'transamadi.lucky@gmail.com', // list of receivers
      subject: 'Application',
      html: output,
      // attachments: [
      //       {   // file on disk as an attachment
      //         filename: 'attachment.txt',
      //         path: 'C:\Users\User2\Desktop\NESA\group project\tech_careers_ng\email-service' // stream this file
      //     },
      // ] 
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log("Email could not be sent", error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
        res.send(req.body); //display sent mail
  });

app.listen(port, () => console.log(`Server started on....${port}`));