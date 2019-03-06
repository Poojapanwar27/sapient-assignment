import React from 'react';
import moment from "moment";
import './index.scss';

const CommentList = props => {
    const {data} = props;
    if (data && data.text !== null) {
        return (
            <li className="comments-list__item">
                <div className="comments-list__body">
                    <a href="/" className="toggle-comments" onClick={props.handleToggle}>[-]</a>
                    <ul className="comments-list__header">
                        <li className="col">
                            <span className="user">
                                {data.author}
                            </span>
                        </li>
                        <li className="col">
                            <span className="created-at">
                                {moment(data.created_at).fromNow()}
                            </span>
                            
                        </li>
                    </ul>
                </div>
                <div className="comments-list__comments">
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                    {props.children}
                </div>
            </li>
        );
    } else {
        return ''
    }
    
}

export default CommentList;