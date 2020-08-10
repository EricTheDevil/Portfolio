import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app";



const myfirstelement = <h1>Hello React!</h1>
/*
ReactDOM.render(
    <BrowserRouter>
  <App />
    </BrowserRouter>
    , document.getElementById('root'));
  registerServiceWorker();
  */

ReactDOM.render(<App />, document.getElementById('root'));