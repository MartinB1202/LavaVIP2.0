// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwJG2vj7Ow2ZOfGa1P-6CoJ1jO9P3uJ9U",
  authDomain: "loginlavavip.firebaseapp.com",
  projectId: "loginlavavip",
  storageBucket: "loginlavavip.firebasestorage.app",
  messagingSenderId: "532266405316",
  appId: "1:532266405316:web:faaab880ac2efae5a7e891",
  measurementId: "G-GYNV6TQ3XB"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

let auth;
if(Platform.OS === 'web'){
  auth = getAuth(appfirebase);
  } else{
 auth = initializeAuth(appfirebase,{
  persistence: getReactNativePersistence(AsyncStorage),
});
}

const db = getFirestore(appfirebase);
export default appfirebase;
export{auth};
export {db};