import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getFeedsAsync, handleHideStateAsync, handleUpvotesAsync} from '../../../actions';
import CommentForm from '../../molecules/comment-form';
import CommentItem from '../../molecules/comment-item';
import CommentList from '../../molecules/comment-list';
import Loader from '../../atoms/loader';
import customFeedHandler from '../../hoc/custom-feed-handler';
import {hideItemStorage, upvotesStorage} from '../../../helpers';

const CommentsItem = customFeedHandler(CommentItem);

class Comments extends PureComponent {
    componentDidMount() {
        const itemId = window.location.href.split('item_')[1];
        this.props.dispatch(getFeedsAsync('/items/'+itemId));

        if (typeof localStorage !== 'undefined') {
            if (localStorage.getItem(hideItemStorage)) {
                this.props.dispatch(handleHideStateAsync());
            } 
            if (localStorage.getItem(upvotesStorage)) {
                this.props.dispatch(handleUpvotesAsync());
            }
        }
    }

    toggleElm = (e) => {
        e.preventDefault();
        e.currentTarget.parentElement.nextSibling.classList.toggle('collapse');
    }

    list = (data) => {
        if (data) {
            const children = (items) => {
                if (items) {
                    return <ul>{ this.list(items) }</ul>
                }
            }
            return data.map((node) => {
                return <CommentList data={node} handleToggle={this.toggleElm}>
                  {children(node.children)}
                </CommentList>
            })
        }        
    }

    render() {
        const {articles, storedIds, upVotes} = this.props;       
        if (articles) {
            if (upVotes && upVotes.indexOf(parseInt(articles.id)) !== -1) {
                articles.updatedPoints = articles.points + 1;
            }
            const RenderComment = (storedIds && storedIds.indexOf(parseInt(articles.id)) === -1) ? <CommentsItem data={articles}/> : '';

            return(
                <div className="comments">
                    {RenderComment}
                    <CommentForm  data={articles}/>
                    <ul className="comments-list">
                        {this.list(articles.children)}
                    </ul>
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

export default connect(mapStateToProps)(Comments);