import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1YkwPv4QWtvOkltLyCTyi5TaN8nB6tPk",
  authDomain: "e-commerce-proyecto-final.firebaseapp.com",
  projectId: "e-commerce-proyecto-final",
  storageBucket: "e-commerce-proyecto-final.appspot.com",
  messagingSenderId: "705603299521",
  appId: "1:705603299521:web:fcda0122df59959626cc40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a functin
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

