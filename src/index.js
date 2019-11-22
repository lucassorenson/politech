import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import { App } from './app';
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.css'
import './app/app.css'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
