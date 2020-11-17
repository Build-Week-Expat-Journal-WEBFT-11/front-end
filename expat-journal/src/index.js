import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


import reducer from "./Unit3Components/reducers"

let store = createStore(reducer,applyMiddleware(thunk))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
    document.getElementById('root')
  );
  


