import React from 'react';
import './header.css';
import logo from '../img/news-logo.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className='logo' src={logo} alt='Logo'></img>
                <ul className='header-ul'>
                    <li className='header-li'><a href='#home'>Главная</a></li>
                </ul>
            </header>
        )
    }
}

export default Header