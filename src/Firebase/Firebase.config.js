// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_LOCAL_apiKey,
  // authDomain: import.meta.env.VITE_LOCAL_authDomain,
  // projectId: import.meta.env.VITE_LOCAL_projectId,
  // storageBucket: import.meta.env.VITE_LOCAL_storageBucket,
  // messagingSenderId: import.meta.env.VITE_LOCAL_messagingSenderId,
  // appId: import.meta.env.VITE_LOCAL_appId,

  apiKey: 'AIzaSyDCUlL-M_jJcMUt_Uzu9It9VENXV3hIwsw',
  authDomain: 'lingocamp-4fdac.firebaseapp.com',
  projectId: 'lingocamp-4fdac',
  storageBucket: 'lingocamp-4fdac.appspot.com',
  messagingSenderId: '579332384250',
  appId: '1:579332384250:web:0a7abe6ad4dff64294f043',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
