import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);