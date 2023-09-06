import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjlaEjUP8X3FkWaAq4AZv298hjuojy7XY",
    authDomain: "gumtree-73c00.firebaseapp.com",
    projectId: "gumtree-73c00",
    storageBucket: "gumtree-73c00.appspot.com",
    messagingSenderId: "953342273316",
    appId: "1:953342273316:web:01f0fec8309bbffe0d75b1",
    measurementId: "G-5T7LDMP4NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// gives us an auth instance
export const auth = getAuth(app);

// in order to use this auth instance elsewhere
//export default { auth };