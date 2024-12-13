import React, { useState } from "react";
import '../styles/RegisterPage.css';
import logoRusa from '../assets/logorusa.png';
import maskotImage from '../assets/maskot.png';
import kotakanImage from '../assets/kotakan.jpg';

const RegisterPart2 = () => {
  const [fileNames, setFileNames] = useState({
    cv: "Scan CV Kamu",
    ktp: "Scan KTP Kamu",
    photo: "Upload Foto Kamu",
  });

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    setFileNames((prev) => ({
      ...prev,
      [key]: file ? file.name : `Scan ${key.charAt(0).toUpperCase() + key.slice(1)} Kamu`,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fileNames.cv || fileNames.cv === "Scan CV Kamu") {
      alert("Harap unggah file CV Anda.");
      return;
    }

    if (!fileNames.ktp || fileNames.ktp === "Scan KTP Kamu") {
      alert("Harap unggah file KTP Anda.");
      return;
    }

    if (!fileNames.photo || fileNames.photo === "Upload Foto Kamu") {
      alert("Harap unggah foto Anda.");
      return;
    }

    alert("Form berhasil dikirim!");
  };

  return (
    <div>
      <div className="logo">
        <img src= {logoRusa} alt="Logo Website" />
      </div>

      <div className="maskot">
        <img src= {maskotImage} alt="Maskot Website" />
        <p className="caption">To be mentor, unlock</p>
        <p className="caption">your potential</p>
      </div>

      <div className="temform">
        <img src= {kotakanImage} alt="form Website" />
        <div className="text-overlay">Daftar Sebagai Mentor</div>
        <form className="form-overlay" onSubmit={handleSubmit}>
          <label htmlFor="cv" className="custom-file-upload">{fileNames.cv}</label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={(e) => handleFileChange(e, "cv")}
            accept=".pdf,.doc,.docx"
          />

          <label htmlFor="ktp" className="custom-file-upload">{fileNames.ktp}</label>
          <input
            type="file"
            id="ktp"
            name="ktp"
            onChange={(e) => handleFileChange(e, "ktp")}
            accept="image/*,.pdf"
          />

          <label htmlFor="photo" className="custom-file-upload">{fileNames.photo}</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => handleFileChange(e, "photo")}
            accept="image/*"
          />

          <input type="text" placeholder="Link Portofolio" required />
          <input type="text" placeholder="Role Kamu (Bisa Lebih Dari 1)" required />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPart2;
