import React from 'react';
import logo from './gitlab.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://avesis.itu.edu.tr/ozemir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cihangir Özemir Bitirme
        </a>
      </header>
    </div>
  );
}

export default App;
