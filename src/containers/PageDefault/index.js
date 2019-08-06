import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/'>Page default</Link>
        <Link to='/other'>Page other</Link>
      </header>
    </div>
  );
}

export default App;
