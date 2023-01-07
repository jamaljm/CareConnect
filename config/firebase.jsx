import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBwyiLcfB0T3Rpe77Zk4siEvrEux9nunos",
  authDomain: "careconnet-802be.firebaseapp.com",
  projectId: "careconnet-802be",
  storageBucket: "careconnet-802be.appspot.com",
  messagingSenderId: "1010233699136",
  appId: "1:1010233699136:web:4337935d34341f1c5ce8a5"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
