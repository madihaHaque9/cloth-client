// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcfzVuPhNE2Cr69pO54UHq8_2mhn9qK3E",
  authDomain: "cloth-client.firebaseapp.com",
  projectId: "cloth-client",
  storageBucket: "cloth-client.appspot.com",
  messagingSenderId: "250952432743",
  appId: "1:250952432743:web:bbb403d737620c10aee8c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;