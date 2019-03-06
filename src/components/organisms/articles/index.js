import React, {PureComponent} from 'react';
import Article from '../../molecules/article';
import {connect} from 'react-redux';
import {getFeedsAsync, handleHideStateAsync, handleUpvotesAsync} from '../../../actions';
import LoadMore from '../../molecules/loadmore';
import Loader from '../../atoms/loader';
import customFeedHandler from '../../hoc/custom-feed-handler';
import {hideItemStorage, upvotesStorage} from '../../../helpers';

const ArticleItem = customFeedHandler(Article);

class ArticleList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0
        };
    }

    componentDidMount() {
        this.props.dispatch(getFeedsAsync(this.props.api));

        if (typeof localStorage !== 'undefined') {
            if (localStorage.getItem(hideItemStorage)) {
                this.props.dispatch(handleHideStateAsync());
            } 
            if (localStorage.getItem(upvotesStorage)) {
                this.props.dispatch(handleUpvotesAsync());
            }
        }
    }

    loadMoreHandler = (event) => {
        if (event) {
            let pageNum = this.state.pageNum + 1;
            this.setState({
                pageNum: pageNum
            });
    
            if (pageNum > 0) {
                this.props.dispatch(getFeedsAsync(this.props.api+'&page='+pageNum));
            }
        }
    }

    render() {
        const {articles, storedIds, upVotes} = this.props;

        if (articles) {
            let filteredData;
            const paginate = (articles.nbPages > 0 && articles.nbPages > articles.page + 1) ? <LoadMore onLoadMore={this.loadMoreHandler} />: null;

            if (storedIds) {
                filteredData = articles.hits.filter(item => {
                    return !storedIds.some(id => {
                        return parseInt(item.objectID) === id;
                    });
                });
            } else {
                filteredData = articles.hits;
            }

            return (
                <div className="feeds">                   
                    {filteredData.map((item) => {
                        if (upVotes) {
                            upVotes.filter(id => {
                                if (id === parseInt(item.objectID)) {
                                    item.updatedPoints = item.points + 1;
                                    return item;
                                }
                            });
                        }
                        return (
                            <ArticleItem data={item} />
                        )
                    })}
                    {paginate}
                </div>
            )
        } else {
            return(
               <Loader />
            )
        }
    }
}

const mapStateToProps = state => ({
    articles: state.articleReducer.articles,
    storedIds: state.articleReducer.storedIds,
    upVotes: state.articleReducer.upVotes
});

export default connect(mapStateToProps)(ArticleList);