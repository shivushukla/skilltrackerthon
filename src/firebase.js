import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCj5jKh8NPD8QPK8-2tJqHCuQt0GXO_bkQ",
  authDomain: "hackathonspring2022-14291.firebaseapp.com",
  projectId: "hackathonspring2022-14291",
  storageBucket: "hackathonspring2022-14291.appspot.com",
  messagingSenderId: "31403433901",
  appId: "1:31403433901:web:08764d419725f0d7114b24",
  measurementId: "G-82LJXJC35B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

// const analytics = getAnalytics(app);