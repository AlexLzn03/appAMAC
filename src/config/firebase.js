/* - yarn add @react-native-firebase/app
- yarn add @react-native-firebase/auth */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbD1j1C6ydS5cOl1fmQ-Pwdaq5b-YaGEw",
  authDomain: "appamac-c5d21.firebaseapp.com",
  projectId: "appamac-c5d21",
  storageBucket: "appamac-c5d21.appspot.com",
  messagingSenderId: "955541453673",
  appId: "1:955541453673:web:d63b502d6f16019384dbf8",
  measurementId: "G-HX2RLD9SEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);