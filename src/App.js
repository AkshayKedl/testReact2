// import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAd5fwWXQF5idwlnFmT1I4diU0NEiwTXAw",
      authDomain: "testfirebase-03.firebaseapp.com",
      projectId: "testfirebase-03",
      storageBucket: "testfirebase-03.appspot.com",
      messagingSenderId: "1042818136390",
      appId: "1:1042818136390:web:111c40f080f1180ba14d47"
    };
    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Test Firebase</h1>
      </header>
    </div>
  );
}

export default App;
