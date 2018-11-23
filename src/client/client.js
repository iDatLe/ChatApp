import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../shared/App.js';
import configureStore from '../server/helpers/renderer.js';

const initialState = window.INITIAL_STATE;

delete window.INITIAL_STATE;

const store = configureStore(initialState);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)