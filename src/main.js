import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.js';



ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
