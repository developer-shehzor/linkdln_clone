// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnKXs1RdePP-NVtWuoqtlv_KNfPrhSd0A",
  authDomain: "linkedin-clone-be5ab.firebaseapp.com",
  projectId: "linkedin-clone-be5ab",
  storageBucket: "linkedin-clone-be5ab.appspot.com",
  messagingSenderId: "628105728340",
  appId: "1:628105728340:web:e85f21c1f3b48eefe338c1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider(); 
// const storage = getStorage(app);

// export { auth, provider, storage }
// export default db