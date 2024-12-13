// /src/components/Header.jsx
import React from 'react';
import '../styles/header.css';
import createadbutton from '../assets/createadbutton.png';
import backgroundcoin from '../assets/backgroundcoin.png';
import coin from '../assets/coin.png';
import addsquare from '../assets/add-square.png';
import notif from '../assets/notification-bing.png';

const Header = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="menu-toggle" onClick={onMenuToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <input type="text" className="search-bar" aria-label="Search" />

            <button className="createads-button">
                <img src={createadbutton} alt="Create Ad" />
            </button>

            <button className="bgcoin-button">
                <img src={backgroundcoin} alt="Coin Background" />
            </button>

            <button className="logocoin">
                <img src={coin} alt="Coin" />
                <div className="angkacoin">0</div>
            </button>

            <button className="logotambah">
                <img src={addsquare} alt="Add" />
            </button>

            <button className="notifbutton">
                <img src={notif} alt="Notifications" />
            </button>
        </header>
    );
};

export default Header;
