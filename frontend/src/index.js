import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/layout.scss";
import "./assets/scss/header.scss";
import "./assets/scss/leftnav.scss";
import "./assets/scss/chatbot.scss";
import "./assets/scss/login.scss";
import "./assets/scss/main.scss";
import "./assets/scss/guide.scss";
import "./assets/scss/step.scss";

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import RoutesConfig from './routes/routes.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename="/"> 
    <RoutesConfig />
  </HashRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
