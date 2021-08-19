import React, { useState } from 'react';
import './header.scss';
import logo from '../../assets/logo/logo-header.svg';
import menuIcon from '../../assets/icons/icon-hamburger.svg';
import arrowIcon from '../../assets/icons/icon-arrow-down.svg';

function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <header>
            <div className='header'>
                <nav className='header__menu-container'>
                    <img className='header__menu-logo' src={logo} alt='logo that reads sunnyside in white' />
                    <button className='header__menu-button' onClick={handleToggle}>
                        <img className='header__menu' src={menuIcon} alt='white menu option with three horizontal lines' />
                    </button>
                    <ul className={`${navbarOpen ? 'header__menu-show' : 'header__menu-no-show' }`}>
                        <li className='header__menu-item'>About</li>
                        <li className='header__menu-item'>Services</li>
                        <li className='header__menu-item'>Projects</li>
                        <li className='header__menu-item header__menu-item--contact'>CONTACT</li>
                    </ul>
                </nav>
                <div className='header__slogan-container'>
                    <h1 className='header__slogan'>WE ARE CREATIVES</h1>
                    <img className='header__arrow' src={arrowIcon} alt='white arrow icon pointing down' />
                </div>
            </div>
        </header>
    );
}

export default Header;