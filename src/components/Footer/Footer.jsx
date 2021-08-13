import React from 'react';
import './footer.scss';
import logo from '../../assets/logo/logo-footer.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconPinterest from '../../assets/icons/icon-pinterest.svg';


function Footer() {
    return (
        <div className='footer'>
            <img className='footer__logo' src={logo} />
            <div className='footer__nav'>
                <p className='footer__nav-item'>
                    About
                </p>
                <p className='footer__nav-item'>
                    Services
                </p>
                <p className='footer__nav-item'>
                    Projects
                </p>
            </div>
            <div className='footer__social'>
                <img className='footer__social-icon' src={iconFacebook} />
                <img className='footer__social-icon' src={iconInstagram} />
                <img className='footer__social-icon' src={iconTwitter} />
                <img className='footer__social-icon' src={iconPinterest} />
            </div>
        </div>
    );
}

export default Footer;