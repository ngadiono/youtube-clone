// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDZs-4OJAvXMJU3J9Uu7eiPVnt9JqOx8Y',
  authDomain: 'video-50308.firebaseapp.com',
  projectId: 'video-50308',
  storageBucket: 'video-50308.appspot.com',
  messagingSenderId: '494314359617',
  appId: '1:494314359617:web:7e14249cd7783f117f6fc0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
