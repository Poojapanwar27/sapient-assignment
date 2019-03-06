import React from 'react';
import ArticleList from '../organisms/articles';

const RecentFeeds = props => {
    return (
        <div className="top-news">
            <ArticleList api="/search_by_date?tags=story"/>
        </div>
    )
}

export default RecentFeeds;