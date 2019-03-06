import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    GET_FEEDS,
    GET_FEEDS_ASYNC,
    GET_STORED_IDS,
    GET_STORED_IDS_ASYNC,
    GET_UPVOTES,
    GET_UPVOTES_ASYNC
} from '../actions';
import {hideItemStorage, upvotesStorage} from '../helpers';

const apiUrl = 'https://hn.algolia.com/api/v1';

const fetchJSON = (url) =>
    axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error));

const getSetLocalStorage = (storageName) => {
    if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem(storageName)) {
            return JSON.parse(localStorage.getItem(storageName));
        }
    }
}

function* fetchArticles(params) {
    try {
        const qParam = (params.payload) ? params.payload : '';
        let response = yield call(fetchJSON, apiUrl+qParam);
        yield put({ type: GET_FEEDS, payload: response });
    } catch (error) {
        console.log('error');
    }
}

function* handleHideState() {
    const response = yield call(getSetLocalStorage, hideItemStorage);
    yield put({ type: GET_STORED_IDS, payload: response });
}

function* handleUpvotes() {
    const response = yield call(getSetLocalStorage, upvotesStorage);
    yield put({ type: GET_UPVOTES, payload: response });
}

function* Saga() {
    yield takeLatest(GET_FEEDS_ASYNC, fetchArticles);
    yield takeLatest(GET_STORED_IDS_ASYNC, handleHideState);
    yield takeLatest(GET_UPVOTES_ASYNC, handleUpvotes);
}

export default Saga;