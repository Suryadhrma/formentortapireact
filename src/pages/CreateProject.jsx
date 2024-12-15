// Frontend: React JSX
// File: AddProject.js
import React, { useState } from "react";
import "../styles/CreateProject.css";
import logouank from '../assets/logouank.png';
import bulatnambah from '../assets/bulatnambah.png';
import untukbutton from '../assets/untukbutton.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi

const AddProject = () => {
  const [projectInfo, setProjectInfo] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [price, setPrice] = useState("");
  const navigate = useNavigate(); // Inisialisasi navigasi

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectInfo", projectInfo);
    formData.append("videoFile", videoFile);
    formData.append("price", price);

    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Project added successfully!");
    } else {
      alert("Error adding project.");
    }
  };

  const handleNavigate = () => {
    navigate("/another-page"); // Ganti "/another-page" dengan path yang sesuai
  };

  return (
    <div className="add-project-container">
      <h2>Tambah Project Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Informasi Project</label>
          <textarea
            className="custom-textarea"
            value={projectInfo}
            onChange={(e) => setProjectInfo(e.target.value)}
            placeholder="Deskripsi project Anda"
            required
          ></textarea>
        </div>


        <div className="form-group">
          <label>Upload Video</label>
            <div className="custom-file-wrapper">
            <label htmlFor="file-upload" className="file-label">
            <img
                src={bulatnambah} // Ganti dengan URL vektor/ikon Anda
                alt="Upload Icon"
                className="file-icon"
            />
            <span>Tambahkan Video Yang Menjelaskan Project Anda</span>
            </label>
          <input
            type="file"
            id="file-upload"
            className="file-input"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            required
          />
            </div>
        </div>

        <div className="form-group">
            <label>Harga Project</label>
            <div className="input-with-icon">
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Masukkan harga"
                required
                />

                <img
                src={logouank} /* Ganti dengan ikon/vector yang diinginkan */
                alt="Icon"
                className="input-icon input-icon-left"
                />
            </div>
        </div>

        <div className="form-group">
            
                <button type="button" className="navigate-button" onClick={handleNavigate}>
                    Materi Pembelajaran
                </button>

                
   
        </div>

        <div className="form-group">
          <button type="button" className="cancel-button">
            Batal
          </button>
          <button type="submit" className="submit-button">
            Selesai
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;

