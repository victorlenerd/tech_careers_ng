var cron = require('node-cron');
var admin = require('firebase-admin');
var moment = require('moment');

var serviceAccount = require("./react-app-f6b64-firebase-adminsdk-mc9d0-931add5853.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://react-app-f6b64.firebaseio.com'
});

var db = admin.firestore();

function performDeleteOps() {
    var jobsRef = db.collection('jobs');
    var jobs = [];
    var date = moment();

    jobsRef
    .orderBy('createdAt', 'desc')
    .get()
    .then(function (docs) {
        docs.forEach((doc) => {
            jobs = jobs.concat({ id: doc.id, data: doc.data() });
        });

        var oldDocs = jobs.filter(function (job) {
            var createdDate = moment(job.data.createdAt);
            return date.diff(createdDate, "days") > 30;
        });

        oldDocs.forEach(function (doc) {
            db.collection('jobs').doc(doc.id).delete();
        });
    }).catch(function () {
        console.log('Error getting documents', err);
    });
}

cron.schedule('2 1 30 * 1', performDeleteOps).start();