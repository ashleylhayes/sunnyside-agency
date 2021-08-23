import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './footer.scss';
import logo from '../../assets/logo/logo-footer.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconPinterest from '../../assets/icons/icon-pinterest.svg';


function Footer() {
    return (
        <div className='footer' id='footer'>
            <Link to='/'>
                <img className='footer__logo' src={logo} alt='logo that reads sunnyside in green' />
            </Link>
            <ul className='footer__nav'>
            <HashLink smooth to='/#about'>
                <li className='footer__nav-item'>About</li>
            </HashLink>
            <HashLink smooth to='/#services'>
                <li className='footer__nav-item'>Services</li>
            </HashLink>
            <HashLink smooth to='/#testimonials'>
                <li className='footer__nav-item'>Projects</li>
            </HashLink>
            </ul>
            <div className='footer__social'>
                <Link to= {{ pathname: 'https://facebook.com' }} target='_blank'>
                    <img className='footer__social-icon' src={iconFacebook} alt='facebook logo in green' />
                </Link>
                <Link to= {{ pathname: 'https://instagram.com' }} target='_blank'>
                    <img className='footer__social-icon' src={iconInstagram} alt='instagram logo in green' />
                </Link>
                <Link to= {{ pathname: 'https://twitter.com' }} target='_blank'>
                    <img className='footer__social-icon' src={iconTwitter} alt='twitter logo in green' />
                </Link>
                <Link to= {{ pathname: 'https://pinterest.com' }} target='_blank'>
                    <img className='footer__social-icon' src={iconPinterest} alt='pinterest logo in green' />
                </Link>
            </div>
        </div>
    );
}

export default Footer;