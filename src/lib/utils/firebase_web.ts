// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCb5MokMUUFPCO1KGuMf6dQUm0hoYsCW0g",
    authDomain: "light-university.firebaseapp.com",
    projectId: "light-university",
    storageBucket: "light-university.appspot.com",
    messagingSenderId: "507355115266",
    appId: "1:507355115266:web:1d778b56e99df95c801c1b",
    measurementId: "G-HCMCWJRLGP"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)