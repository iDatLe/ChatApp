import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import reducers from '../../shared/redux/reducers/reducers.js';
import thunk from 'redux-thunk'
import App from '../../shared/App.js';

export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        )
    )
}

export const handleRender = (req, res) => {
    const store = configureStore();

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    )

    const initialState = store.getState();
    res.send(renderFullPage(content, initialState));
}

export const renderFullPage = (content, initialState) => {
    return `
        <html lang = 'en'>
            <head>
                <title>Chat App</title>
                <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/main.bundle.js"></script>
                <script>
                    window.INITIAL_STATE = ${serialize(initialState)}
                </script>
            </body>
        </html>
    `
};