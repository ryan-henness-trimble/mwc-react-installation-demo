import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// MWC Step 1: run 'npm install @trimble-oss/modus-web-components' and import defineCustomElements.
import { defineCustomElements } from '@trimble-oss/modus-web-components/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// MWC Step 2: Call defineCustomElements to register the components with the browser.
defineCustomElements();
