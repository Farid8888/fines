import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import FinesProvider from './context/context'

ReactDOM.render(
  <FinesProvider>
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </FinesProvider>
  ,
  document.getElementById('root')
);


