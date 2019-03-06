import React, {Component} from 'react';
import {hideItemStorage, upvotesStorage, setLocalStorage} from '../../../helpers';

const customFeedHandler = (WrappedComponent) => {
    return class CustomFeedHandler extends Component {
        handleHideItems = (e, id) => {
            const parentNode = e.currentTarget.parentElement.parentElement.parentElement;
                parentNode.remove();
            setLocalStorage(hideItemStorage, id);
        }

        handleUpvotes = (e, id, dataAction) => {
            e.preventDefault();
            const elm = e.currentTarget;
            let points = parseInt(elm.innerText);

            elm.classList.toggle('voted');
            
            if (points) {
                points = (elm.classList.contains('voted')) ? points + 1 : points - 1;
                elm.innerText = points;
            }           
            setLocalStorage(upvotesStorage, id, dataAction);
        }

        clickHandler = (id, e) => {       
            if (e) {
                const dataAction = e.currentTarget.getAttribute('data-action');
                switch(dataAction) {
                    case 'hide':
                        this.handleHideItems(e, id);
                        break;
                    case 'upvotes':
                        this.handleUpvotes(e, id, dataAction);
                        break;
                    default:
                }
            }
        }
        render() {
            return(
                <WrappedComponent onClick={this.clickHandler} {...this.props} />
            )
        }
    }
}
export default customFeedHandler;