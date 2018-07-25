const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');

const app = express();

let port = process.env.PORT || 5555;

app.use(fileUpload());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send({ "success": true });
})

app.post('/apply', (req, res) => {
  let uploadFilename = req.files.resume.name;
  let uploadData = req.files.resume.data;
  let uploadEncoding = req.files.resume.encoding;

  mailText = (uploadFilename, uploadData, uploadEncoding) => {
    const output = `
      <p>Job Application at Techcareers NG</p>
      <h3>Applicant's details</h3>
      <ul 
        style="list-style-type: none; 
        font-size: 1rem; 
        font-weight: 600; 
      ">   
        <li>Full Name:${req.body.fullname}</li>
        <li>Phone Number: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h5>Cover Letter</h5>
      <div style=" max-width: 65%; border: 1px solid #f58b3b; margin: 2px">
          <p>
              ${req.body.coverletter}
          </p>
      </div>
      <div style="text-align: center">
        <p>
            Powered By &copy; <a href="http://www.nesa.makers.ng/" target="_blank">NESA By Makers</a>
        </p>
      </div>
    `;
  
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
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.redirect('http://54.157.232.127:8080/apply?success=false');
      }
      res.redirect('http://54.157.232.127:8080/apply?success=true');
    });
  }

  mailText(uploadFilename, uploadData, uploadEncoding);
});

app.listen(port, () => console.log(`Server started on....${port}`));