import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ClassDetailPage.css';

const ClassDetail = () => {
    const { id } = useParams();
    const [classDetail, setClassDetail] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/classes/${id}`)
            .then((response) => {
                setClassDetail(response.data);
            })
            .catch((error) => {
                console.error('Error fetching class details:', error);
            });
    }, [id]);

    if (!classDetail) return <div>Loading...</div>;

    return (
        <div className="dashboard-content">
                        <h2>My Course: {classDetail.title}</h2>
                        <p> My Trainee: {classDetail.traineeName}</p>
        
        <div className="classes-container">
            <div className="class-card">
                {/* Bagian Kiri */}
                <div className="class-card-left">
                    <h3>Pertemuan 1</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                {/* Bagian Kanan */}
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>

            <div className="class-card">
                {/* Bagian Kiri */}
                <div className="class-card-left">
                    <h3>Pertemuan 1</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                
                {/* Bagian Kanan */}
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>

            <div className="class-card">
                {/* Bagian Kiri */}
                <div className="class-card-left">
                    <h3>Pertemuan 1</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                
                {/* Bagian Kanan */}
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>

            <div className="class-card">
                {/* Bagian Kiri */}
                <div className="class-card-left">
                    <h3>Pertemuan 1</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                
                {/* Bagian Kanan */}
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ClassDetail;
