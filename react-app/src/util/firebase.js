import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB89s5uWdjEmdsJEGpybXiXJDRPfK1Css0',
  authDomain: 'react-app-f6b64.firebaseapp.com',
  databaseURL: 'https://react-app-f6b64.firebaseio.com',
  projectId: 'react-app-f6b64',
  storageBucket: 'react-app-f6b64.appspot.com',
  messagingSenderId: '1080852047044'
};
export const fApp = firebase.initializeApp(config);
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
