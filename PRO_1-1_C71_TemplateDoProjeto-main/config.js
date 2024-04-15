import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyDTDRBWzFX0Tavg0_nU8iUjTdaW6wpLa84",
  authDomain: "aulateste1-972f4.firebaseapp.com",
  projectId: "aulateste1-972f4",
  storageBucket: "aulateste1-972f4.appspot.com",
  messagingSenderId: "455752953904",
  appId: "1:455752953904:web:b578fc873c8778d3a1bdf5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
