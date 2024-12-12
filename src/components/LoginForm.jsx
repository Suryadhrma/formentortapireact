// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { performEmailLogin, handleForgotPassword } from '../services/authService';
import SocialLoginButtons from './SocialLoginButtons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      await performEmailLogin(email, password);
    } catch (error) {
      alert(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <form className="form-overlay" onSubmit={handleSubmit}>
      <div className="judulsatu">Email</div>
      <input 
        type="email" 
        placeholder="Masukkan Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />

      <div className="juduldua">Password</div>
      <input 
        type="password" 
        placeholder="Masukkan Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />

      <a
        type="button" 
        className="forgotpass" 
        onClick={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}
      >
        Forgot Password?
      </a>

      <button type="submit">Masuk</button>

      <SocialLoginButtons />

      <div className="account-links">
        <div className="noakun">Belum Punya Akun?</div>
        <a href="../register/register.html" className="buatakun">Buat Disini</a>
      </div>
    </form>
  );
};

export default LoginForm;