// pages/admin/DashboardAdmin.jsx
import React from 'react';

const ValidationMentor = () => {

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-3xl font-bold">Validation Mentor</h2>
          <div className="flex space-x-4 rounded-xl ">
            <button
              onClick={() => handleTabClick('permintaan')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'permintaan' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Permintaan
            </button>
            <button
              onClick={() => handleTabClick('diterima')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'diterima' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Diterima
            </button>
            <button
              onClick={() => handleTabClick('ditolak')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'ditolak' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Ditolak
            </button>
          </div>

      </header>

    </div>
  );
};

export default ValidationMentor;
