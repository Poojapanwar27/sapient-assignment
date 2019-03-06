import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import Saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
    rootReducer,
    compose(devToolsEnhancer(), applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga);

export default store;
