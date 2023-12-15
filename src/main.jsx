import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDg2VHwcpt3uzGsZK8yHip8gTCRsNjmirs",
  authDomain: "enki-43467.firebaseapp.com",
  projectId: "enki-43467",
  storageBucket: "enki-43467.appspot.com",
  messagingSenderId: "1065963150228",
  appId: "1:1065963150228:web:e655c7d22e8ea953a60d81"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
