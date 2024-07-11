// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUPtcPVK44HB1m2y0Ty1npXlmoL4RccE",
  authDomain: "realstate-project-a07ac.firebaseapp.com",
  projectId: "realstate-project-a07ac",
  storageBucket: "realstate-project-a07ac.appspot.com",
  messagingSenderId: "561834948089",
  appId: "1:561834948089:web:5df2954b18304a8d56b928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;