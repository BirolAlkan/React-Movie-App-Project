import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createuser = async(email, password, navigate) => {
  try {
   let userCredential= await createUserWithEmailAndPassword(auth, email, password)
   navigate("/");
   console.log(userCredential)
  } catch (error) {
    alert(error.message);
  }
}


export const signIn =  async(email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
  } catch (error) {
    alert(error.massage)
  }
};

export const userObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
     console.log("user signed out");
    }
  });
};

export const Logout = () => {
  signOut (auth)
}