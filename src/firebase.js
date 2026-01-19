import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"; // Import these tools

const firebaseConfig = {
  apiKey: "AIzaSyCYUKnYyZ3QoMj0KbzjdBwRrBw6tZsWN8g",
  authDomain: "nanas-nails.firebaseapp.com",
  projectId: "nanas-nails",
  storageBucket: "nanas-nails.firebasestorage.app",
  messagingSenderId: "395551506191",
  appId: "1:395551506191:web:1c1a612e01736e3401087a",
  measurementId: "G-NFP5MQ9YL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and EXPORT them
export const db = getFirestore(app);
export const reviewsCollection = collection(db, "reviews");