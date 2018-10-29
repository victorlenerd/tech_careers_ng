const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

var admin = require('firebase-admin');

var serviceAccount = require("./react-app-f6b64-firebase-adminsdk-mc9d0-931add5853.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://react-app-f6b64.firebaseio.com'
});

var db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

const app = express();

let email = process.env.EMAIL;
let pass = process.env.PASS;

app.use(fileUpload());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "build/static")));

app.get("(/jobs|/post|/about)", (req, res) => {
	res.sendFile(path.join(__dirname, "build/index.html"));
});

app.post("/postjob", (req, res) => {
	const body = req.body;

	db.collection('jobs')
	.add(body)
	.then((docRef) => {
		res.status(200).send({ status: true });
	})
	.catch((error) => {
		res.status(401).send(error);
	});
});

app.post("/apply", (req, res) => {
	let uploadFilename = req.files.resume.name;
	let uploadData = req.files.resume.data;
	let uploadEncoding = req.files.resume.encoding;

	const mailText = (uploadFilename, uploadData, uploadEncoding) => {
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
				<p>${req.body.coverletter}</p>
			</div>
			<div style="text-align: center">
				<p>Powered By &copy; <a href="http://www.nesa.makers.ng/" target="_blank">NESA By Makers</a></p>
			</div>
		`;

		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: email,
				pass: pass
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		let mailOptions = {
			from: "\"Tech Careers NG\" <nesa@makers.ng>", // sender address
			to: req.body.to, // list of receivers
			subject: req.body.jobTitle,
			html: output,
			attachments: [{
				filename: uploadFilename,
				content: uploadData,
				encoding: uploadEncoding
			}]
		};

		transporter.sendMail(mailOptions, (error) => {
			if (error) {
				return res.redirect("https://techcareers.ng/apply?success=false");
			}
			res.redirect("https://techcareers.ng/apply?success=true");
		});
	};

	mailText(uploadFilename, uploadData, uploadEncoding);
});


app.listen(3000, () => console.log("Example app listening on port 3000!"));