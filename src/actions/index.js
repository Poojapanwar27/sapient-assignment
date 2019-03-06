export const GET_FEEDS = 'GET_FEEDS',
    GET_FEEDS_ASYNC = 'GET_FEEDS_ASYNC',
    RECENT_FEEDS = 'RECENT_FEEDS',
    GET_STORED_IDS = 'GET_STORED_IDS',
    GET_STORED_IDS_ASYNC = 'GET_STORED_IDS_ASYNC',
    GET_UPVOTES = 'GET_UPVOTES',
    GET_UPVOTES_ASYNC = 'GET_UPVOTES_ASYNC';

export const getFeedsAsync = (payload) => ({
    type: GET_FEEDS_ASYNC,
    payload
});

export const handleHideStateAsync = (payload) => ({
    type: GET_STORED_IDS_ASYNC,
    payload
});

export const handleUpvotesAsync = (payload) => ({
    type: GET_UPVOTES_ASYNC,
    payload
});