import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const onUpdate = (registration: ServiceWorkerRegistration) => {
  // Display a notification or prompt the user to update the application
  if (window.confirm('A new version of the application is available. Do you want to update?')) {
    // Send a message to the service worker to skip waiting and activate the new version
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    // Refresh the page to activate the new version
    window.location.reload();
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register({ onUpdate });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
