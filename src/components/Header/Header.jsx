import React from 'react';
import './header.scss';
import logo from '../../assets/logo/logo.svg';
import menuIcon from '../../assets/icons/icon-hamburger.svg';
import arrowIcon from '../../assets/icons/icon-arrow-down.svg';

function Header() {
    return (
        <header>
            <div className='header'>
                <div className='header__menu-container'>
                    <img className='header__logo' src={logo} alt='white logo that reads "sunnyside"' />
                    <img className='header__menu' src={menuIcon} alt='white menu option with three horizontal lines' />
                </div>
                <div className='header__slogan-container'>
                    <h1 className='header__slogan'>WE ARE CREATIVES</h1>
                    <img className='header__arrow' src={arrowIcon} alt='white arrow icon pointing down' />
                </div>
            </div>
        </header>
    );
}

export default Header;