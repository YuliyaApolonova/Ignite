import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import App2 from './app2.jsx'

var container = document.getElementById('container');
var example = document.getElementById('example');
ReactDOM.render(<App />, container);
ReactDOM.render(<App2 />, example);