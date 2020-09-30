import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD2xLKxDJlg5EqNMfbnBMiOryWebISYY5k",
    authDomain: "nwitter-3eff5.firebaseapp.com",
    databaseURL: "https://nwitter-3eff5.firebaseio.com",
    projectId: "nwitter-3eff5",
    storageBucket: "nwitter-3eff5.appspot.com",
    messagingSenderId: "118722510757",
    appId: "1:118722510757:web:22829533597e1b7a1b324c"
};

export default firebase.initializeApp(firebaseConfig);