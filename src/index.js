import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';//importing our router component to add to our application

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter> {/* App is a child of the BrowserRouter such that APP has access to BrowserRouter functionality*/}
    <App />
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
