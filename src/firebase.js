// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyA7MoRYLkemY0tsOdk7Cw35NY9cwWSNzzM",
//   authDomain: "demopartner-ef44a.firebaseapp.com",
//   projectId: "demopartner-ef44a",
//   storageBucket: "demopartner-ef44a.appspot.com",
//   messagingSenderId: "709857628068",
//   appId: "1:709857628068:web:4cb5f6fb06371a4a723b31",
//   measurementId: "G-X2C1BG3WR0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };


const firebaseConfig = {
    apiKey: "AIzaSyBRV1_-veB5sVI3xWhetFJoDXuXrOAQ7Y4",
    authDomain: "fir-tutor-4e2a7.firebaseapp.com",
    projectId: "fir-tutor-4e2a7",
    storageBucket: "fir-tutor-4e2a7.appspot.com",
    messagingSenderId: "186442591839",
    appId: "1:186442591839:web:d33371cc422ce9d15435ea",
    measurementId: "G-002RVY0WHW"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };