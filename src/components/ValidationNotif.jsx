import React from "react";
import "../styles/ValidationNotif.css";
import ceklis from "../assets/ceklis.png"

const ValidationNotif = () => {
  return (
    <div className="validation-container">
      <div className="validation-card">
        <div className="check-icon">
          <img
            src={ceklis}
            alt="Check Icon"
          />
        </div>
        <h2>Silahkan Tunggu untuk proses validasi Coursenya yaa</h2>
      </div>
      <button className="finish-button">Selesai</button>
    </div>
  );
};

export default ValidationNotif;
