import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/reactjs-gmail-clone">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
