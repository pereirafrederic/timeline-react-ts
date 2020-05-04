import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCUz6tH-3q_veH6bI_Cs2FUmJD0z1iUUKQ",
  authDomain: "timeline-react-ts-e7a58.firebaseapp.com",
  databaseURL: "https://timeline-react-ts-e7a58.firebaseio.com",
  projectId: "timeline-react-ts-e7a58",
  storageBucket: "timeline-react-ts-e7a58.appspot.com",
  messagingSenderId: "645660353053",
  appId: "1:645660353053:web:16728842b2eed825ecdcf4",
  measurementId: "G-RLYJTM5QCV"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
