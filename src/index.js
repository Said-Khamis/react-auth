import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
//axios.defaults.baseURL = "http://192.168.100.102:8080/api";
//axios.defaults.baseURL = "http://laravel_echo.test:8080/api";

axios.defaults.baseURL = "http://192.168.100.243:8080/api";
axios.defaults.withCredentials = false;
axios.defaults.withXSRFToken = true;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
