import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/serviceWorkerRegistration.js')
           .then(function() { console.log("Service Worker Registered"); });
}