import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9tsd4vBaq9U9p5q6GwXxPzH_qZeXC_Vw",
  authDomain: "clonetwitter-5fd0d.firebaseapp.com",
  projectId: "clonetwitter-5fd0d",
  storageBucket: "clonetwitter-5fd0d.appspot.com",
  messagingSenderId: "578914869823",
  appId: "1:578914869823:web:62d156a65a485a13474e8a"
};

const app = initializeApp(firebaseConfig);

  export default app;
  export const authService = getAuth();