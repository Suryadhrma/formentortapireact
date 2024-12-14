import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/DashboardPage.css';

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
        <div className="classes-container">
            {/* Class Card */}
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

            {/* Duplikat Card */}
            <div className="class-card">
                <div className="class-card-left">
                    <h3>Pertemuan 2</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>

            <div className="class-card">
                <div className="class-card-left">
                    <h3>Pertemuan 3</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>

            <div className="class-card">
                <div className="class-card-left">
                    <h3>Pertemuan 4</h3>
                    <div className="class-card-icon">
                        <span role="img" aria-label="icon">📝</span>
                        <p>Belum Dibuat</p>
                    </div>
                </div>
                <div className="class-card-right">
                    <button>Isi Laporan Aktivitas</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetail;
