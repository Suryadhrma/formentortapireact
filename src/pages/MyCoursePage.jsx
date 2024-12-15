/* // DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import axios from 'axios';*/

// src/pages/DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/MyCoursePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const DashboardContent = () => {
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from API
        axios
        .get('http://localhost:5000/api/classes') // Ganti URL dengan API endpoint-mu
        .then((response) => {
            setClasses(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/classes/${id}`);
    };

    return (
        <div className="dashboard-content">
        <div className="dashboard-header">
            <h2>My Course</h2>
        </div>
        <div className="classes-container">
            {filteredClasses.map((cls, index) => (
            <div className="class-card" key={index}
                onClick={() => handleCardClick(cls.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleCardClick(cls.id)}
            >
                <img src={cls.image} alt={cls.title} className="class-image" />
                <h3>{cls.title}</h3>
                <p>{cls.desc}</p>
                <div className="pojokkananbwh">
                    <h4>{totalTrainee} Students</h4>
                    <h5>{stars}</h5>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default DashboardContent;
