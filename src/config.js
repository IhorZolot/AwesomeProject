// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQPaG1utPqihh856dUrIp7dbhIGDPpvpc",
  authDomain: "modular-citron-400014.firebaseapp.com",
  databaseURL: "https://modular-citron-400014-default-rtdb.firebaseio.com",
  projectId: "modular-citron-400014",
  storageBucket: "modular-citron-400014.appspot.com",
  messagingSenderId: "540502998627",
  appId: "1:540502998627:web:07659aab6a1310bd1f8256",
  measurementId: "G-7SZ05TPCS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);