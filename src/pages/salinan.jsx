/* // DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import axios from 'axios';*/

// src/pages/DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/MyCoursePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const MyCourse = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from API
        axios
        .get('http://localhost:5000/api/courses') // Ganti URL dengan API endpoint-mu
        .then((response) => {
            setCourses(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/courses/${id}`);
    };

    return (
        <div className="dashboard-content">
        <div className="dashboard-header">
            <h2>My Course</h2>
        </div>
        <div className="classes-container">
            {filteredClasses.map((crs, index) => (
            <div className="class-card" key={index}
                onClick={() => handleCardClick(crs.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleCardClick(crs.id)}
            >
                <img src={crs.image} alt={cls.title} className="class-image" />
                <h3>{crs.title}</h3>
                <p>{crs.desc}</p>
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
