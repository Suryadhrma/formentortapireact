import React, { useState } from "react";
import MeetingCard from '../components/MeetingCard';
import '../styles/MateriPembelajaran.css';
import IsiSilabus from "../pages/IsiSilabus";
import tmbltmbh from '../assets/tmbltmbh.png';

const MateriPembelajaran = () => {
    const [isIsiSilabusOpen, setIsiSilabusOpen] = useState(false);

    const handleIsiSilabus = () => {
        setIsiSilabusOpen(true);
    };

    const handleSubmitSilabus = (silabus) => {
        console.log("Silabus berhasil disimpan:", silabus);
        setIsiSilabusOpen(false);
    };
    
    const handleCancel = () => {
        setIsiSilabusOpen(false);
    };

    return (
        <div className="materi-pembelajaran-page">
            {!isIsiSilabusOpen && (
            <h2>Materi Pembelajaran</h2> )}
            {!isIsiSilabusOpen ?( 
            <div className="meeting-cards-container">
                <MeetingCard title="Pertemuan 1" onIsiSilabusClick={handleIsiSilabus} />
                <MeetingCard title="Pertemuan 2" onIsiSilabusClick={handleIsiSilabus} />
                <MeetingCard title="Pertemuan 3" onIsiSilabusClick={handleIsiSilabus} />
                <MeetingCard title="Pertemuan 4" onIsiSilabusClick={handleIsiSilabus} />
            </div>
            ) : (  <IsiSilabus onSubmit={handleSubmitSilabus} onCancel={handleCancel} /> )};

            {!isIsiSilabusOpen && (
                <button className="tambah-pertemuan-btn">
                    <img src={tmbltmbh} alt="tombol" />
                </button>
            )}

          
        </div>
    );
};

export default MateriPembelajaran;
