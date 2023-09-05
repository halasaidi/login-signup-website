
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBhVcEo75OG-7nHWti06eyo2SCv_y0XdLw",
  authDomain: "reactproject-b27fc.firebaseapp.com",
  projectId: "reactproject-b27fc",
  storageBucket: "reactproject-b27fc.appspot.com",
  messagingSenderId: "822077190324",
  appId: "1:822077190324:web:be1b0779dd27eaff0ea7e1",
  measurementId: "G-1TPT0R0NB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}