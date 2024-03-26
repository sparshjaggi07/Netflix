import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-TXDpQwLP__y4yjRQgeyXUTfw95e5rTs",
  authDomain: "netflix-react-9b743.firebaseapp.com",
  projectId: "netflix-react-9b743",
  storageBucket: "netflix-react-9b743.appspot.com",
  messagingSenderId: "870833760241",
  appId: "1:870833760241:web:d2742ec76c736081334650",
  measurementId: "G-W6TKPNNWC8"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
