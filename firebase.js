import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTLmBkMtK8-w0Opk15JYIE8iEVYIsgY7k",
    authDomain: "sportszone-fd46a.firebaseapp.com",
    databaseURL: "https://sportszone-fd46a.firebaseio.com",
    projectId: "sportszone-fd46a",
    storageBucket: "sportszone-fd46a.appspot.com",
    messagingSenderId: "202671100771",
    appId: "1:202671100771:web:1940a29e0770a1321d7956",
    measurementId: "G-KKVTKLWQFE"
    };
firebase.initializeApp(config);


export default firebase;