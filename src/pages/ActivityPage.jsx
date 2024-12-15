// ActivityForm.jsx
import React from 'react';
import '../styles/ActivityPage.css';

const ActivityForm = () => {
    return (
        <div className="form-container">
            <div className="rincian-kegiatan">
            <h2>Rincian Kegiatan</h2>
            <input
                type="text"
                className="input-field"
                placeholder="Rincian selama pertemuan berlangsung"
            />
            </div>

            <div className="Dokum">
                <h2>Dokumentasi</h2>
                <div className="textarea-container">
                    <textarea
                        className="textarea-field"
                        placeholder="Dokumentasi selama pertemuan"
                    ></textarea>
                    <button className="attachment-button">📎</button>
                </div>
            </div>


                <button className="cancel-button">Batal</button>



                <button className="submit-button">Selesai</button>

        </div>
    );
};

export default ActivityForm;
