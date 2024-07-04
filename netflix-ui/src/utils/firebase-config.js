import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMdm9sd0-9WnA6JGTnSMNgniaLDkjhLUI",
  authDomain: "react-netflix-clone-1f7d3.firebaseapp.com",
  projectId: "react-netflix-clone-1f7d3",
  storageBucket: "react-netflix-clone-1f7d3.appspot.com",
  messagingSenderId: "159153185675",
  appId: "1:159153185675:web:7496eb69db09aac34b058e"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
