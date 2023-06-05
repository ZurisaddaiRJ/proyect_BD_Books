// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth} from "firebase/auth";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNcTPDVcqPC_O64h7NhlRKS2V9EqlflQ",
  authDomain: "books-app-97721.firebaseapp.com",
  projectId: "books-app-97721",
  storageBucket: "books-app-97721.appspot.com",
  messagingSenderId: "394334964642",
  appId: "1:394334964642:web:79822aead4b63fc7b940fb"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
const auth = getAuth(firebaseApp);


export {
  storage, firestore as default,auth
};

//export default firestore;
//const app = initializeApp(firebaseConfig);