
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCecU0QUftLwHnJUmMwbveyuCLH_sYWXis",
  authDomain: "react-residential-project.firebaseapp.com",
  projectId: "react-residential-project",
  storageBucket: "react-residential-project.appspot.com",
  messagingSenderId: "481394398183",
  appId: "1:481394398183:web:7dc4af4b2b3bdfca5fa342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;