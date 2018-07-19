const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
// const path = require('path'); //module for generating file path in node
let port = process.env.PORT || 5555;


//set up the view engine for the submit success
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(fileUpload());
// Body Parser Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/apply', (req, res) => {
  let uploadFilename = req.files.resume.name;
  let uploadData = req.files.resume.data;
  let uploadEncoding = req.files.resume.encoding;


  //mail text
  mailText = (uploadFilename, uploadData, uploadEncoding) => {
    const output = `
            <div style="display: block ">
            <p>Job Application at Techcareers NG</p>
            <h3 style="margin: auto">Applicant's details</h3>
            <div>   
              <p>Name Of Applicant:<strong> ${req.body.fullname}</strong></p>
              <br/>
              <p>Phone:<strong>${req.body.phone}</strong></p>
              <br/>
              <p>Email:<strong> ${req.body.email}</strong></p>
            </div>
            <div>
            <h3>Cover Letter</h3>
                <p>
                    ${req.body.coverletter}
                </p>
            </div>
            </div>
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
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Tech Careers NG" <techcareers@techbuzz.com.ng>', // sender address
      to: req.body.to, // list of receivers
      subject: req.body.jobTitle,
      html: output,
      attachments: [{
        filename: uploadFilename,
        content: uploadData,
        encoding: uploadEncoding
      }]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Email could not be sent", error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


      //   res.render('contact', {msg:'Email has been sent'});
    });

    //   res.render("submitted");
    res.redirect('http://localhost:3000/apply?success=true');

  }
  //end mail text

  mailText(uploadFilename, uploadData, uploadEncoding);
});

app.listen(port, () => console.log(`Server started on....${port}`));