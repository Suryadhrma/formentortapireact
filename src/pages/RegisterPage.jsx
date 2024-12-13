import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import SocialLoginButtons from '../components/SocialLoginButtonsforregis';

import logoRusa from '../assets/logorusa.png';
import maskotImage from '../assets/maskot.png';
import kotakanImage from '../assets/kotakan.jpg';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, email, password, confirmPassword } = formData;

        if (!fullName || !email || !password || !confirmPassword) {
            alert('Harap isi semua kolom.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password dan Konfirmasi Password tidak cocok.');
            return;
        }

        alert('Pendaftaran berhasil!');
        console.log({
            fullName,
            email,
            password
        });

        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="register-container">
            <div className="logo">
                <img src={logoRusa} alt="Logo Website" />
            </div>

            <div className="maskot">
                <img src={maskotImage} alt="Maskot Website" />
                <p className="caption">To be mentor, unlock</p>
                <p className="caption">your potential</p>
            </div>

            <div className="temform">
                <img src={kotakanImage} alt="Form Website" />
                <div className="text-overlay">Daftar Sebagai Mentor</div>
                <form className="form-overlay" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nama Lengkap"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Masukkan Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Masukkan Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Daftar</button>
                    <div className="sociallogin">Or Social Register</div>

                    <SocialLoginButtons />

                    <div className="noakun">Sudah Punya Akun?</div>
                    <a href="../login/loginpage.html" className="buatakun">Masuk Disini</a>
                </form>
            </div>
        </div>
    );
};

export default Register;
