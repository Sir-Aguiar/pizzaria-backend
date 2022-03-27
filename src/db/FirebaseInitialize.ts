import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "dotenv/config";

const FirebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

const app = initializeApp(FirebaseConfig);
const OrdersDB = getFirestore(app);
export { app, OrdersDB };
