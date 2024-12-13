/* import React from "react";
import '../styles/RegisterPage.css';
import logoRusa from '../assets/logorusa.png';
import maskotImage from '../assets/maskot.png';
import kotakanImage from '../assets/kotakan.jpg'; */

import React, { useState } from 'react';
import '../styles/PrivacyPolicy.css';
import logoRusa from '../assets/logorusa.png';
import maskotImage from '../assets/maskot.png';
import kotakanImage from '../assets/kotakan.jpg';

const PrivacyPolicy = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLogoClick = () => {
        alert('You clicked on the logo!');
    };

    const handleMouseOver = (e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.transition = 'transform 0.3s ease';
    };

    const handleMouseOut = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="logo" onClick={handleLogoClick}>
                <img src= {logoRusa} alt="Logo Website" />
            </div>

            <div className="maskot">
                <img 
                    src= {maskotImage}
                    alt="Maskot Website" 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut} 
                />
                <p className="caption">To be mentor, unlock</p>
                <p className="caption">your potential</p>
            </div>

            <div className="temform">
                <img src= {kotakanImage} alt="Form Website" />

                <div className="text-overlay">AGREEMENT</div>
                <div className="text-overlay-dua">Terms and Conditions</div>
                <div className="text-overlay-tiga">Last Updated on 5/12/2022</div>

                <div className="scroll-container">
                    <div className="clause-container">
                        <h2>Clause 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.</p>
                        <h2>Clause 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat.</p>
                    </div>
                </div>

                <form className="form-overlay" onSubmit={handleFormSubmit}>
                    <button type="submit">Daftar</button>
                </form>
            </div>

            {showPopup && (
                <div style={popupStyle}>
                    <h2>Terms and Conditions</h2>
                    <p>By using this website, you agree to our terms and conditions.</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
};

export default PrivacyPolicy;




