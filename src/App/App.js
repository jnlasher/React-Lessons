import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import StrictMode from '../StrictMode/StrictMode';
import Suspense from '../Suspense/Suspense';

import logo from '../resources/logo.svg';
import './App.css';


function NavBar(props) {
  return (
      <div className="NavBar">
        {props.children}
      </div>
  );
}

function DefaultHeader() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="content">
          <Route exact path="/" component={DefaultHeader}/>
          <Route path="/strict-mode" component={StrictMode}/>
          <Route path="/suspense" component={Suspense}/>
        </div>
        <NavBar>
          <NavLink exact to="/">Top</NavLink>
          <NavLink to="/strict-mode">Strict Mode</NavLink>
          <NavLink to="/suspense">Suspense</NavLink>
        </NavBar>
      </div>
    </HashRouter>
  );
}

export default App;