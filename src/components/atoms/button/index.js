import React from 'react';
import './index.scss';

const Button = (props) => {
    return (
        <button className={`btn btn--`+props.classType} type={props.type} title={props.label} onClick={props.clickHandler} data-action={(props.action)? props.action : ''}>
            {props.label}
        </button>
    )
}

export default Button;