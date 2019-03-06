import React, {PureComponent} from 'react';
import Logo from '../../atoms/logo';
import Navigation from '../../atoms/navigation';
import './index.scss';

class Header extends PureComponent {
    toggleClass = (e) => {
        this.classList.toggleClass('topnav__link_active');
    }
    render() {
        return(
            <div className="header">
                <Logo />
                <Navigation toggleHandler={this.toggleClass}/>
            </div>
        )
    }
}
export default Header;