// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBOC6ELpy2P3LbEEG7DpLvLyYtYWWDcwgc",
//   authDomain: "invedus-f8160.firebaseapp.com",
//   projectId: "invedus-f8160",
//   storageBucket: "invedus-f8160.appspot.com",
//   messagingSenderId: "424035120319",
//   appId: "1:424035120319:web:e134466bf9941039ee420a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOC6ELpy2P3LbEEG7DpLvLyYtYWWDcwgc",
  authDomain: "invedus-f8160.firebaseapp.com",
  projectId: "invedus-f8160",
  storageBucket: "invedus-f8160.appspot.com",
  messagingSenderId: "424035120319",
  appId: "1:424035120319:web:e134466bf9941039ee420a",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export Firebase so it can be used elsewhere
export const FireBase = initializeApp(firebaseConfig);
export const storage = getStorage(FireBase);
// export default FireBase;
