// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

import logoRusa from '../assets/logorusa.png';
import maskotImage from '../assets/maskot.png';
import kotakanImage from '../assets/kotakan.jpg';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="logo">
        <img src={logoRusa} alt="Logo Website" />
      </div>

      <div className="maskot">
        <img src={maskotImage} alt="Maskot Website" />
        <p className="caption">To be mentor, unlock</p>
        <p className="caption">your potential</p>
      </div>

      <div className="temform">
        <img src={kotakanImage} alt="form Website" />
        <div className="text-overlay">Masuk Sebagai Mentor</div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;