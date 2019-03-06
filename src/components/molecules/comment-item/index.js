import React from 'react';
import moment from "moment";
import {formatURL} from '../../../helpers'; 
import './index.scss';
import Button from '../../atoms/button';

const CommentItem = props => {
    const {data, onClick} = props;
    const upVoteCl = (data.updatedPoints) ? 'feeds__upvotes voted' : 'feeds__upvotes ';
    return (
        <article className="feeds__item comments" id={data.id} key={data.id}>
            <ul>
                <li className="col comments__header">
                    <span className = {upVoteCl} data-action="upvotes" onClick={e => onClick(data.id, e)}></span>
                    <h1>
                        {data.title}
                    </h1>
                    <span>
                        (<a href={data.url} target="_blank" rel="noopener noreferrer">
                            {formatURL(data.url)}
                        </a>)
                    </span>
                </li>
                <li className="col">
                    {(data.updatedPoints) ? data.updatedPoints : data.points} points by {data.author} {moment(data.created_at).fromNow()}                
                </li>
                <li className="col col-border">
                    <Button label="Hide" action="hide" clickHandler={e => onClick(data.id, e)} classType="ternary" type="button" />              
                </li>
                <li className="col col-border">
                    Past              
                </li>
                <li className="col col-border">
                    <a href={`https://www.google.com/search?q=`+data.title} target="_blank" rel="noopener noreferrer">
                        Web 
                    </a>               
                </li>
                <li className="col col-border">
                    Favorite                
                </li>
                <li className="col col-border">
                    {data.children.length} comments
                </li>
            </ul>
        </article>
    );
}

export default CommentItem;