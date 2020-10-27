import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAiz0yUOOYLJ0VgF5i-nrcm7taWULugXp0",
    authDomain: "todos-21199.firebaseapp.com",
    databaseURL: "https://todos-21199.firebaseio.com",
    projectId: "todos-21199",
    storageBucket: "todos-21199.appspot.com",
    messagingSenderId: "1087129471049",
    appId: "1:1087129471049:web:bd18fb7127177d3a9b9798"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase