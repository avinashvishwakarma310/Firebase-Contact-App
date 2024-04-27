// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mGY8XMbGCj5xa-AP-WyamsMsml9NKNs",
  authDomain: "vite-contact-882fe.firebaseapp.com",
  projectId: "vite-contact-882fe",
  storageBucket: "vite-contact-882fe.appspot.com",
  messagingSenderId: "970402045648",
  appId: "1:970402045648:web:66346af5d3d12d532848d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);