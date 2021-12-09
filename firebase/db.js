import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyDTHyekw23lzt4BapPjPgqEM14_lwAqqNA",
    authDomain: "updraft-76c7f.firebaseapp.com",
    projectId: "updraft-76c7f",
    storageBucket: "updraft-76c7f.appspot.com",
    messagingSenderId: "983879767668",
    appId: "1:983879767668:web:2dad41ad7d99f5a76ea321",
    measurementId: "G-2EW1QX9BWG"
  };

  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  // const analytics = getAnalytics(app);
