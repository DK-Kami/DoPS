import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import services from './middleware';
const { TypeService } = services;

TypeService.loadTypes();
ReactDOM.render((
  <App />
), document.getElementById('root'));

