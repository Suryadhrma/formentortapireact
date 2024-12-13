// /src/components/sidebar.jsx
import React from 'react';
import '../styles/header.css';

import logorusa from '../assets/logorusa.png';
import profile from '../assets/profile.jpg';
import rumahan from '../assets/rumahan.png';
import tukcourse from '../assets/tukcourse.png';
import tukchat from '../assets/tukchat.png';
import settings from '../assets/Settings.png';
import tukhelpcenter from '../assets/tukhelpcenter.png';
import logot from '../assets/tuklogot.png';

const Sidebar = ({ isActive, onClose }) => {
    return (
        <>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                <img src= {logorusa} alt="Sidebar Logo" className="sidebar-image" />

                <div className="profile-section">
                    <img src= {profile} alt="Profile" className="profile-picture" />
                    <div className="profile-info">
                        <p className="profile-name">Nama Pengguna</p>
                        <p className="profile-email">email@example.com</p>
                    </div>
                </div>

                <div className="rtt-section">
                    <a href="#">
                        <img src= {rumahan} alt="Home" className="menu-icon" />
                        Dashboard
                    </a>
                    <a href="#">
                        <img src= {tukcourse} alt="My Course" className="menu-icon" />
                        My Course
                    </a>
                    <a href="#">
                        <img src= {tukchat} alt="Chat" className="menu-icon" />
                        Chat
                    </a>
                </div>

                <div className="st-section">
                    <a href="#">
                        <img src= {settings} alt="Settings" className="menu-icon" />
                        Settings
                    </a>
                    <a href="#">
                        <img src= {tukhelpcenter} alt="Help Center" className="menu-icon" />
                        Help Center
                    </a>
                </div>

                <div className="logout-section">
                    <a href="#">
                        <img src= {logot} alt="Logout" className="menu-icon" />
                        Logout Account
                    </a>
                </div>
            </div>

            <div
                id="sidebarOverlay"
                className={isActive ? 'active' : ''}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: isActive ? 'block' : 'none',
                    zIndex: 1000,
                }}
            ></div>
        </>
    );
};

export default Sidebar;