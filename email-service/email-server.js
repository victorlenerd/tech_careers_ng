let api_key = 'de9bcc612244b19fd8e0dfe205a56c3d-8b7bf2f1-e8d9b05b';
let domain = 'sandboxe358d19a23894694ad47a2afd0b2eb8c.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

port = process.env.PORT | 7777;

app.post('/apply', function(req, res){ 
    let data = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
      //   attachment: attch
      };
      
      mailgun.messages().send(data, function (error, body) {
          if(error){
              console.log('unable to submit application', error); 
          } 
          console.log('success', body);
      });
      res.send(req.body);
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});