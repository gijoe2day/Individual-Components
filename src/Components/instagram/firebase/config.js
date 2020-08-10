import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRsWtbIl3va7pHqXvBlnQ7izcAgV_WZRU",
  authDomain: "firegram-project-b2a80.firebaseapp.com",
  databaseURL: "https://firegram-project-b2a80.firebaseio.com",
  projectId: "firegram-project-b2a80",
  storageBucket: "firegram-project-b2a80.appspot.com",
  messagingSenderId: "466196807027",
  appId: "1:466196807027:web:892f9503ea0c89ebeb5906",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
