import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ServiceWorkerHandler } from './serviceWorkerHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Update ads the <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >asdas
          Learn React
        </a>asdsa
      </header>
      <ServiceWorkerHandler />
    </div>
  );
}
export default App;