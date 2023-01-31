// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCEFAuZwKNa7s4h7oFsW4KEKkhWhaejiuU',
	authDomain: 'bani-1e228.firebaseapp.com',
	projectId: 'bani-1e228',
	storageBucket: 'bani-1e228.appspot.com',
	messagingSenderId: '619687336707',
	appId: '1:619687336707:web:69fb7480441bfcdfa9e736',
	measurementId: 'G-XMXZCY2047',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
