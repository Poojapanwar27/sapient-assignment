import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = props => {
    return(
        <ul className="topnav">
            <li className="topnav__item">
                <NavLink exact to="/" className="topnav__link" activeClassName="topnav__link_active" onClick={props.toggleHandler}>
                    Top
                </NavLink>
            </li>
            <li className="topnav__item">
                <NavLink to="/recent-feeds" className="topnav__link" activeClassName='topnav__link_active' onClick={props.toggleHandler}>
                    New
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
