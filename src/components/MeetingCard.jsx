import React from 'react';
import '../styles/MateriPembelajaran.css'; // Pastikan ini sudah diimpor untuk styling

const MeetingCard = ({ title, onIsiSilabusClick }) => {
    return (
        <div className="meeting-card">
            <div className="meeting-card-content">
                <h3>{title}</h3>
                <button className="isi-silabus-btn" onClick={onIsiSilabusClick}>Isi Silabus</button>
            </div>
            <div className="meeting-card-status">
                <span className="status-icon">📋</span>
                <span className="status-text">Belum Dibuat</span>
            </div>
        </div>
    );
};

export default MeetingCard;
