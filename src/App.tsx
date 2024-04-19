import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ServiceWorkerHandler } from "./serviceWorkerHandler";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const Content = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Update ads the <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    asdas Learn React
                </a>
                asdsa
            </header>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<ServiceWorkerHandler />} />
            </Routes>
            <Routes>
                <Route path="*" element={<Content />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
