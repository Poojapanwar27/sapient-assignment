import React from 'react';
import logo from '../../assets/logo.gif';
import './index.scss';

const Logo = props => {
    return (
        <div className="logo">
            <a href="/" title="Home">
                <img className="logo__img" src={logo} alt="Hacker News" title="Hacker News" />
            </a>
        </div>
    )
}

export default Logo;
