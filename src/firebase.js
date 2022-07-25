import { initializeApp } from "firebase/app";

const firebaseconfig = initializeApp({
    apiKey: "AIzaSyBU59BIsCisr1zZb9TS_dkf8cr3jK7TSec",
    authDomain: "todoapp-25bc8.firebaseapp.com",
    projectId: "todoapp-25bc8",
    storageBucket: "todoapp-25bc8.appspot.com",
    messagingSenderId: "656938886993",
    appId: "1:656938886993:web:74e15ad62e1b1f8a969570"
})


export { firebaseconfig as firebase };