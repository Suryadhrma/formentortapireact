/* // DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import axios from 'axios';*/

// DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import axios from 'axios';

const DashboardContent = () => {
  const [classes, setClasses] = useState([]);
  const [activeTab, setActiveTab] = useState('progress'); // Default tab is 'progress'

  useEffect(() => {
    // Fetch data from API
    axios
      .get('https://your-api-url.com/api/classes') // Ganti URL dengan API endpoint-mu
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter classes based on the active tab
  const filteredClasses = classes.filter((cls) => {
    return activeTab === 'progress' ? cls.progress < 100 : cls.progress === 100;
  });

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h2>My Activity</h2>
        <div className="tabs">
          <button
            className={activeTab === 'progress' ? 'active' : ''}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
          <button
            className={activeTab === 'completed' ? 'active' : ''}
            onClick={() => setActiveTab('completed')}
          >
            Selesai
          </button>
        </div>
      </div>
      <div className="classes-container">
        {filteredClasses.map((cls, index) => (
          <div className="class-card" key={index}>
            <img src={cls.image} alt={cls.title} className="class-image" />
            <h3>{cls.title}</h3>
            <p>Nama Trainee: {cls.traineeName}</p>
            <div className="progress-container">
              <progress value={cls.progress} max="100"></progress>
              <span>{cls.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
