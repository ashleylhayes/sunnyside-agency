import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                    <Link to='/'>
                        <img className='header__menu-logo' src={logo} alt='logo that reads sunnyside in white' />
                    </Link>
                    <ul className='header__menu-list'>
                        <HashLink smooth to='/#about'>
                            <li className='header__menu-list-item'>About</li>
                        </HashLink>
                        <HashLink smooth to='/#services'>
                            <li className='header__menu-list-item'>Services</li>
                        </HashLink>
                        <HashLink smooth to='/#testimonials'>
                            <li className='header__menu-list-item'>Projects</li>
                        </HashLink>
                        <HashLink smooth to='/#footer'>
                            <li className='header__menu-list-item--contact'>CONTACT</li>
                        </HashLink>
                    </ul>
                    <button className='header__menu-button' onClick={handleToggle}>
                        <img className='header__menu' src={menuIcon} alt='white menu option with three horizontal lines' />
                    </button>
                    <ul className={`${navbarOpen ? 'header__menu-open' : 'header__menu-closed' }`}>
                    <HashLink smooth to='/#about'>
                        <li className='header__menu-item'>About</li>
                    </HashLink>
                    <HashLink smooth to='/#services'>
                        <li className='header__menu-item'>Services</li>
                    </HashLink>
                    <HashLink smooth to='/#testimonials'>
                        <li className='header__menu-item'>Projects</li>
                    </HashLink>
                    <HashLink smooth to='/#footer'>
                        <li className='header__menu-item header__menu-item--contact'>CONTACT</li>
                    </HashLink>
                    </ul>
                </nav>
                <div className='header__slogan-container'>
                    <h1 className='header__slogan'>WE ARE CREATIVES</h1>
                    <HashLink smooth to='/#about'>
                        <img className='header__arrow' src={arrowIcon} alt='white arrow icon pointing down' />
                    </HashLink>
                </div>
            </div>
        </header>
    );
}

export default Header;