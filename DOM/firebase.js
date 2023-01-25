// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  //AquÃ­ vuestra configuraciÃ³n Firebase
  apiKey: "AIzaSyC1WcofuF9lfXsVuiOK5g8IpEdXORi-tT8",

  authDomain: "prueba-dom-d47c4.firebaseapp.com",

  projectId: "prueba-dom-d47c4",

  storageBucket: "prueba-dom-d47c4.appspot.com",

  messagingSenderId: "616762274675",

  appId: "1:616762274675:web:7f2286892e0b64adfa8b06",
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//CRUD

export const dameDocs = (ref) => getDocs(collection(db, ref));
export const ondameDocs = (ref, callback) =>
  onSnapshot(collection(db, ref), callback);
