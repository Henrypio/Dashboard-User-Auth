import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNMLcT3xdmPyuU17kKfI3QIeZzzkOeC4U",
  authDomain: "dashboard-user-auth.firebaseapp.com",
  projectId: "dashboard-user-auth",
  storageBucket: "dashboard-user-auth.appspot.com",
  messagingSenderId: "451539326664",
  appId: "1:451539326664:web:47877404f4d74e2855f7fd",
  measurementId: "G-FBY7M4HN2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
