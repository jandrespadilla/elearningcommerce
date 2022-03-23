// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-T3Jc2-qsszxmRvqB7YKfQ6ymvLKP40",
  authDomain: "mercurso.firebaseapp.com",
  projectId: "mercurso",
  storageBucket: "mercurso.appspot.com",
  messagingSenderId: "502596276778",
  appId: "1:502596276778:web:1b6414da43e167df0a2953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFireStoreApp() {
    return app
}