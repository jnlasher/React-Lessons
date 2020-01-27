import React from 'react';
import logo from '../resources/logo.svg';
import './App.css';
import Animations from "../Animations/Animations";
import StrictMode from "../StrictMode/StrictMode";


function NavBar() {
  return (
    <div className="NavBar">
      <a href="#">Top</a>
      {/* <a href="#">Animations</a>
      <a href="#">Suspense</a>
      <a href="#">Hooks</a>
      <a href="#">Custom Hooks</a>
      <a href="#">Concurrent Mode</a> */}
    </div>
  );
}

function HeaderContent() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderContent />
      <NavBar />
    </div>
  );
}

export default App;
