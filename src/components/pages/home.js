import React from 'react';
import ArticleList from '../organisms/articles';

const Home = props => {
    return (
        <div className="top-news">
            <ArticleList api="/search?tags=front_page"/>
        </div>
    )
}

export default Home;