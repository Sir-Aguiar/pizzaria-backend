import "dotenv/config";
declare const app: import("@firebase/app").FirebaseApp;
declare const OrdersDB: import("@firebase/firestore").Firestore;
export { app, OrdersDB };
