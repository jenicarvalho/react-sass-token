import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);