import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../molecules/header';
import Home from './home';
import RecentFeeds from './recent-feeds';
import AddComments from './add-comments';
import NotFound from '../atoms/not-found';

const App = props => {
    return (
        <div className="page-wrapper" data={props.history}>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recent-feeds" component={RecentFeeds} />
                <Route path="/item_:id" component={AddComments} />
                <Route path="*" component={Home} />
            </Switch>
        </div>
    )
}

export default App;