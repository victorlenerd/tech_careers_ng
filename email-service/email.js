const api_key = 'c7884b5c7eb3f78b2d5b16615f91be0c-8b7bf2f1-679842e1';
const DOMAIN = 'http://sandbox8bbbc0790a12421d8035fec7d6ddac54.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

let data = {
  from: 'Excited User <transamadi.lucky@gmail.com>',
  to: 'transamadi.lucky@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, (error, body)  => {
 console.log(body);
 
});
