import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDtvlFKTSPPSGWmiac6mmqOu3wXJhJTyJM",
    authDomain: "i-messageapp.firebaseapp.com",
    databaseURL: "https://i-messsageapp.firebaseio.com",
    projectId: "i-messageapp",
    storageBucket: "i-messageapp.appspot.com",
    messagingSenderId: "772345052277",
    appId: "1:772345052277:web:9e3a3219f6454a88a40c3c",
    measurementId: "G-60JV2SB5JZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;