import React from 'react';
import moment from "moment";
import {formatURL} from '../../../helpers';
import Button from '../../atoms/button';
import './index.scss';

const Article = props => {
    const {data, onClick} = props;
    const upVoteCl = (data.updatedPoints) ? 'feeds__upvotes voted' : 'feeds__upvotes ';

    return (
        <article className="feeds__item" id={data.objectID} key={data.objectID}>
            <ul>
                <li className="col feeds__comments">
                    <a href={`/item_${data.objectID}`} title="Comments">
                        {data.num_comments}
                    </a>
                </li>
                <li className="col">
                    <span className = {upVoteCl} data-action="upvotes" onClick={e => onClick(data.objectID, e)}>
                        {(data.updatedPoints) ? data.updatedPoints : data.points}
                    </span>
                </li>
                <li className="col">
                    <h2 className ="feeds__title">
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                            {data.title} 
                        </a>
                    </h2>
                </li>
                <li className="col">
                    (<a href={data.url} target="_blank" rel="noopener noreferrer">
                        {formatURL(data.url)}
                    </a>) 
                    by {data.author}
                    {moment(data.created_at).fromNow()}
                </li>
                <li className="col">
                    [<Button label="Hide" action="hide" clickHandler={e => onClick(data.objectID, e)} classType="ternary" type="button" />]
                </li>
            </ul>
        </article>
    );
}

export default Article;