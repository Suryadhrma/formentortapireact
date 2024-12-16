import React, { useState } from "react";
import "../styles/IsiSilabus.css";

const IsiSilabus = ({ onSubmit, onCancel }) => {
  const [judul, setJudul] = useState("");
  const [materi, setMateri] = useState("");
  const [tugas, setTugas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const silabus = { judul, materi, tugas };
    onSubmit(silabus);
  };

  return (
    
    <div className="add-project-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Judul</label>
          <textarea
            className="custom-textarea-judul"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul Pembelajaran"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Materi Pembelajaran</label>
          <textarea
            className="custom-textarea"
            id="materi"
            value={materi}
            onChange={(e) => setMateri(e.target.value)}
            placeholder="Aktivitas apa saja yang akan dilaksanakan"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Tugas</label>
          <textarea
            className="custom-textarea-tugas"
            id="tugas"
            value={tugas}
            onChange={(e) => setTugas(e.target.value)}
            placeholder="Masukkan Tugas Yang akan diberikan"
            required
          ></textarea>
          <button className="attachment-button">📎</button>
        </div>

        <div className="isi-silabus-buttons">
          <button type="button" onClick={onCancel}>
            Batal
          </button>
          <button type="submit">Selesai</button>
        </div>
      </form>
    </div>
  );
};





export default IsiSilabus;
