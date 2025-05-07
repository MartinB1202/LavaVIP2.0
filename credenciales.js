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
  apiKey: "AIzaSyBZ4hbdqV4MZGN5jeMuufI--ZXrDgBFTdY",
  authDomain: "lavavip-699a7.firebaseapp.com",
  projectId: "lavavip-699a7",
  storageBucket: "lavavip-699a7.firebasestorage.app",
  messagingSenderId: "1050773084102",
  appId: "1:1050773084102:web:1333c2078e6f6c83e044c7"
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