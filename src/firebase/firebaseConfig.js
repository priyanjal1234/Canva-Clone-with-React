import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "canva-clone-85592.firebaseapp.com",
  projectId: "canva-clone-85592",
  storageBucket: "canva-clone-85592.firebasestorage.app",
  messagingSenderId: "1058878764224",
  appId: "1:1058878764224:web:98d9b6c1f5d72a2b0ca925",
  measurementId: "G-E8R0K91F97"
};

const app = initializeApp(firebaseConfig);

export default app