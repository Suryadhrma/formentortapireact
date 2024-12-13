// src/components/SocialLoginButtons.jsx
import React from 'react';
import { performGoogleLogin, performAppleLogin } from '../services/authService';

import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';

const SocialLoginButtons = () => {
  return (
    <div className="social-login-buttons">
      <div className="sociallogin">Or Social Register</div>
      <div className="social-buttons">
        <button 
          className="sosiaal" 
          onClick={(e) => {
            e.preventDefault();
            performAppleLogin();
          }}
        >
          <img src={appleIcon} alt="Apple Login" />
        </button>
        <button 
          className="guugel" 
          onClick={(e) => {
            e.preventDefault();
            performGoogleLogin();
          }}
        >
          <img src={googleIcon} alt="Google Login" />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;