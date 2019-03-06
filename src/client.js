import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {devToolsEnhancer} from 'redux-devtools-extension';

import App from './components/pages';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import Saga from './sagas';

const preloadedState = window.__STATE__;

// Allow the passed state to be garbage-collected
delete window.__STATE__;

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
    rootReducer,
    preloadedState,
    compose(applyMiddleware(sagaMiddleware), devToolsEnhancer())
);

sagaMiddleware.run(Saga);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();


