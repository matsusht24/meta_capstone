import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <meta name="description" content='text'></meta>
    <meta name="og:title" content=''/>
    <meta name="og:description" content=''/>
    <meta name="og:image" content=''/>
    <meta name="viewport" content='width=device-width, initial-scale=1'></meta>
    <link rel="stylesheet" href="styles.css"></link>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
