import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import articleReducer from './article';

const rootReducer = combineReducers({
    articleReducer,
    routerReducer
});

export default rootReducer;