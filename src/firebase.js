import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyBS_tKbRSdiRd3ND5BFJXNMiHbT197HB1o",
  authDomain: "todo-app-d97f8.firebaseapp.com",
  projectId: "todo-app-d97f8",
  storageBucket: "todo-app-d97f8.appspot.com",
  messagingSenderId: "569802999438",
  appId: "1:569802999438:web:ec9190f8e838f17b23ebdf"
})

const db = firebaseApp.firestore();

export default db;