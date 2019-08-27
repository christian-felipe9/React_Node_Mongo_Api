import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';


var element = React.createElement('h1', {className: 'greeting'}, 'Hello World');
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
