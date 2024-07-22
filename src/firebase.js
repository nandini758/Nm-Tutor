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


const firebaseConfig =  {
    apiKey: "AIzaSyCjZMBE05gCzSYQ1rZHVSXl8i7z8ESAXkE",
    authDomain: "nm-tutor-cc11d.firebaseapp.com",
    projectId: "nm-tutor-cc11d",
    storageBucket: "nm-tutor-cc11d.appspot.com",
    messagingSenderId: "197619156215",
    appId: "1:197619156215:web:6b81cedf7123730d2bfff2",
    measurementId: "G-YW3FNE4XV5"
  };
    

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };