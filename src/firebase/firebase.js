// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvnndlz87aTR2pcMBIos3-F2MGpghv2EI",
  authDomain: "bd-gotech.firebaseapp.com",
  projectId: "bd-gotech",
  storageBucket: "bd-gotech.appspot.com",
  messagingSenderId: "734472449595",
  appId: "1:734472449595:web:79e6e9bf3c956505acb61e"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;