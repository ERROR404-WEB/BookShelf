import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCEdGRIi-kecCKy8tt-HZC6qDSQmS4E7-U",
  authDomain: "cloudstore-21ff6.firebaseapp.com",
  projectId: "cloudstore-21ff6",
  storageBucket: "cloudstore-21ff6.appspot.com",
  messagingSenderId: "720919460086",
  appId: "1:720919460086:web:91989e65a848cf787514d7"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);