// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBARpjdXOUpaA06duDS00r0vWBiyDlJGiU",
	authDomain: "reactdemo-4212d.firebaseapp.com",
	projectId: "reactdemo-4212d",
	storageBucket: "reactdemo-4212d.appspot.com",
	messagingSenderId: "595428892733",
	appId: "1:595428892733:web:af21afe6e11c2b92afca54",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}