

const firebaseConfig = {
    apiKey: "AIzaSyDPuKnZ_W7X_NgcoTlGnzTMWI6ujl2rKyg",
    authDomain: "parking-system-365621.firebaseapp.com",
    databaseURL: "https://parking-system-365621-default-rtdb.firebaseio.com",
    projectId: "parking-system-365621",
    storageBucket: "parking-system-365621.appspot.com",
    messagingSenderId: "514457351378",
    appId: "1:514457351378:web:fd8054194b6cacd0d9e90b",
    measurementId: "G-QBNBKYZG1Q",
    databaseURL: "https://parking-system-365621-default-rtdb.firebaseio.com",
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {
  firestore,
};


