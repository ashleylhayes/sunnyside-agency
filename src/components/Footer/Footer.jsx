import React from 'react';
import './footer.scss';
import logo from '../../assets/logo/logo.svg';

function Footer() {
    return (
            <div className='footer'>
                <img className='footer__logo' src={logo} />
            </div>
    );
}

export default Footer;