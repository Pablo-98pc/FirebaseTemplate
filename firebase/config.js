
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDSjtH1TVLGamcpp3mY3zQJNzAA74Flyxc",
  authDomain: "my-personal-template.firebaseapp.com",
  projectId: "my-personal-template",
  storageBucket: "my-personal-template.appspot.com",
  messagingSenderId: "548053665405",
  appId: "1:548053665405:web:e9bf08ed8b0dbeb2bb5314",
  measurementId: "G-KC6YYQB5LD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export {auth,provider,db}


