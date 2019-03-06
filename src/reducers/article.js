import {GET_FEEDS, GET_STORED_IDS, GET_UPVOTES} from '../actions';
import initialState from './initialstate';

const articleReducer = (state = initialState, {payload, type}) => {
    switch(type) {
        case GET_FEEDS:
            return {
                ...state,
                articles: payload
            }
        case GET_STORED_IDS:
            return {
                ...state,
                storedIds: payload
            }
        case GET_UPVOTES:
            return {
                ...state,
                upVotes: payload
            }
        default:
            return state;
    }
}

export default articleReducer;