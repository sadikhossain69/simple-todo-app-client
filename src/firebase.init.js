// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ9zUxBUi9ktuzf27PbxJNm8oMn9ecN7c",
    authDomain: "simple-todo-app-6da4d.firebaseapp.com",
    projectId: "simple-todo-app-6da4d",
    storageBucket: "simple-todo-app-6da4d.appspot.com",
    messagingSenderId: "893306058069",
    appId: "1:893306058069:web:9ab5a5821fb67b309cebdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth