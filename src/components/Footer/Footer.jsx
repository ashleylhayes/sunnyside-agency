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
            <img className='footer__logo' src={logo} alt='logo that reads sunnyside in green' />
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
                <img className='footer__social-icon' src={iconFacebook} alt='facebook logo in green' />
                <img className='footer__social-icon' src={iconInstagram} alt='instagram logo in green' />
                <img className='footer__social-icon' src={iconTwitter} alt='twitter logo in green' />
                <img className='footer__social-icon' src={iconPinterest} alt='pinterest logo in green' />
            </div>
        </div>
    );
}

export default Footer;