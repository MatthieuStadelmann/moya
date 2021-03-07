import firebase from '@firebase/app';
import '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyByg8VdZlpigJxoNcKOzV-pHFuinrIUsn8",
    authDomain: "moya-86509.firebaseapp.com",
    projectId: "moya-86509",
    storageBucket: "moya-86509.appspot.com",
    messagingSenderId: "798529621810",
    appId: "1:798529621810:web:e8c9c14cf240a4ef87912b",
    measurementId: "G-8ZSS8JXQQJ"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const db = firebase;
export default db;