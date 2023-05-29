import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZp7AZfagYp2H5dmZYVfCZJ78j7a8M1o",
  authDomain: "my-portfolio-31dcb.firebaseapp.com",
  projectId: "my-portfolio-31dcb",
  storageBucket: "my-portfolio-31dcb.appspot.com",
  messagingSenderId: "898636207567",
  appId: "1:898636207567:web:0e634f2d0924e899966eba",
  measurementId: "G-MHJMQFL6Y5",
};

export const firebase = firebase.initializeApp(firebaseConfig);
